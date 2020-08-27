import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "./portfolio.scss"

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <section className="Portfolio">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-10 Portfolio_top" data-aos="fade-up">
            <ul>
              <li>Youth Summit</li>
              <li>UI/UX, Web, Development</li>
            </ul>
            <h1>
              Plate App is a service for delivering your favorite food from
              restaurants on your mobile phone.
            </h1>
            <a href="#">Launch project</a>
          </div>
          <div className="col-lg-12" data-aos="fade-up">
            <div className="Portfolio_banner">
              <img src="./images/youth-summit-banner.png" />
            </div>
          </div>
          <div className="col-lg-10">
            <div className="Portfolio_goals d-flex" data-aos="fade-up">
              <h3>Goals</h3>
              <div className="Portfolio_goals_content">
                <p>
                  First of all, we developed a design system, so that all
                  products of the company have a common style and adhere to the
                  same rules in design. The interface has received significant
                  improvements. Now the main functions have become more
                  accessible, and thanks to the responsive design the site is
                  convenient to use on any device.
                </p>
              </div>
            </div>
            <div className="Portfolio_process" data-aos="fade-up">
              <img src="./images/youth-summit-process.png" />
            </div>
            <div className="Portfolio_goals d-flex" data-aos="fade-up">
              <h4>The result</h4>
              <div className="Portfolio_goals_content">
                <p>
                  First of all, we developed a design system, so that all
                  products of the company have a common style and adhere to the
                  same rules in design. The interface has received significant
                  improvements. Now the main functions have become more
                  accessible, and thanks to the responsive design the site is
                  convenient to use on any device.
                </p>
                <h5>Technology used</h5>
                <ul>
                  <li>React</li>
                  <li>CSS</li>
                  <li>MongoDB</li>
                  <li>Node</li>
                </ul>
              </div>
            </div>
            <div
              className="d-flex justify-content-center mb200"
              data-aos="fade-up"
            >
              <a href="#" className="next">
                Next
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default Portfolio
