//import { Link } from "gatsby"
import React, { useState } from "react"
import "./header.scss"
import Navigation from "../Navigation/nav"
import { Link } from "gatsby"

const Header = () => {
  const [menu, setMenu] = useState(false)

  const menuToggle = () => {
    setMenu(!menu)
  }

  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="d-flex row justify-content-center">
            <div className="col-lg-12 d-flex justify-content-between">
              <div className="logo">
                <Link to="">
                  <img src="images/logo-blue.svg" />
                </Link>
              </div>
              <div className="menu d-flex align-items-center">
                <a href="#" onClick={menuToggle}>
                  <img src="images/menu.svg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Navigation menu={menu} menuToggle={menuToggle} />
    </>
  )
}

export default Header
