import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Header = props => {
  const { vanessasbranding } = props
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {vanessasbranding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    // <div>
    //   <h1>{vanessasbranding}</h1>
    //   {/* <h1 style={headingStyle}>{vanessasbranding}</h1> styling finns i const headingStyle*/}
    //   {/* <h1 style={{ color: "red", fontSize: "50px" }}>{vanessasbranding}</h1> inline styling */}
    // </div>
  )
}

Header.defaultProps = {
  vanessasbranding: "My App"
}

Header.propTypes = {
  vanessasbranding: PropTypes.string.isRequired
}
// const headingStyle = {
//   color: "green",
//   fontSize: "50px"
// }
export default Header
