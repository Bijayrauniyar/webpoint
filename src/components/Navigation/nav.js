import React from "react"
import "../../css/base.scss"
import "../../css/variables.scss"
import "../../css/fonts.scss"
import "../../css/components.scss"
import "./navigation.scss"

const Navigation = () => (
  <section className="Navigation">
    <div className="container-fluid">
      <div className="d-flex row justify-content-center">
        <div className="col-lg-12 d-flex justify-content-between">
          <div className="logo">
            <a href="#">
              <img src="images/logo-white.svg" />
            </a>
          </div>
          <img src="images/close.svg" alt="" />
        </div>
        <div className="col-lg-11 navbar">
          <ul className="menu">
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">Agency</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <a href="#" className="facebook">
            Facebook
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Navigation
