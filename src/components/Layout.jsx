import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header.jsx"

import "./../style/Common.scss"
import "./../style/Layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container">
      <link href="https://fonts.googleapis.com/css?family=Playfair+Display|Ubuntu:300,400&display=swap" rel="stylesheet"></link>
      <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
