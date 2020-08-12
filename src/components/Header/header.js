//import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header>
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="logo">
            <a href="#">
              <img src="images/logo-blue.svg" />
            </a>
          </div>
          <div className="menu">
            <a href="#">
              <img src="images/menu.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
)

export default Header
