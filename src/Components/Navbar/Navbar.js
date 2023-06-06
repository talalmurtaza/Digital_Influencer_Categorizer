import React from "react";
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark "
      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand"> {props.title} </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                {" "}
                Home{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/blogs">
                {" "}
                Blogs{" "}
              </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link active" href="/about">
                {" "}
                About{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/Contact">
                {" "}
                Contact Us{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" id="City"></a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" href="/Sign-In"> Sign-In</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link active" href="/">
                {" "}
                SignOut{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes={title: PropTypes.string.isRequired}
