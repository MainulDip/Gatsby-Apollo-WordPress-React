import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import '@wordpress/block-library/build-style/style.css'
import './layout.css'

import { useQuery, gql } from '@apollo/client'
import { Client_Second } from './../apollo/index'

const Layout = props => {
  const data = useStaticQuery(graphql`
    query {
      wpgraphql {
        generalSettings {
          title
          url
        }
        menu(id: "TWVudToy") {
          menuItems {
            nodes {
              label
              url
              id
            }
          }
        }
      }
    }
  `)

  const GET_MENU = gql`
    {
      menu(id: "TWVudToy") {
        menuItems {
          nodes {
            label
            url
            id
          }
        }
      }
    }
  `

  const SecondClient = gql`
    {
      users {
        data {
          name
        }
      }
    }
  `

  const dataDD = useQuery(GET_MENU)
  if (!dataDD.loading) console.log(dataDD.data.menu.menuItems.nodes)
  const dataSecond = useQuery(SecondClient, {
    client: Client_Second
  })

  // console.log(dataSecond.data)

  const { title, url } = data.wpgraphql.generalSettings
  const { nodes } = data.wpgraphql.menu.menuItems
  const mainNav = (
    <>
      {nodes.map(menu => (
        <Link key={menu.id} to={menu.url.replace(url, '')}>
          {menu.label}
        </Link>
      ))}
    </>
  )

  // console.log(data);

  // const mainNav = !dataDD.loading ? (
  //   <>
  //     {dataDD.data.menu.menuItems.nodes.map(menu => (
  //       <Link key={menu.id} to={menu.url.replace(url,"blog")}>{menu.label}</Link>
  //     ))}
  //   </>
  // ) : (
  //   <>Loading.......</>
  // )

  return (
    <>
      {/* { (!dataDD.loading) && console.log(dataDD.data.menu.menuItems.nodes)} */}
      <header>
        <Link to='/' className='home' style={{ marginRight: '40px' }}>
          {title}
        </Link>
        <div style={{ display: 'inline', color: 'white' }}>{mainNav}</div>
      </header>
      <main>{props.children}</main>
    </>
  )
}

export default Layout
