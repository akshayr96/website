// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import ThemeToggle from "./ThemeToggle"
import "./../style/Header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-bar">
      <div className="main-logo">AR</div>
      <ul className="nav-items">
        <li className="nav-item"><ThemeToggle/></li>
        <li className="nav-item">Contact Me</li>
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
