// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./../style/Header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-bar">
      <div>AR</div>
      <ul className="nav-items">
        <li className="nav-item">Home</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Blog</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
