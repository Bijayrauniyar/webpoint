import React from "react"

const Service = () => (
  <section className="Services">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10 d-flex">
          <span className="section-title">Our Sevices</span>
          <div className="Services_list">
            <div className="Services_list_wrap">
              <span className="Services_list_title">Design</span>
              <ul className="Services_list_description">
                <li>UI/UX design</li>
                <li>Branding / Logo design</li>
                <li>Websites & mobile apps</li>
                <li>Prototyping and testing</li>
              </ul>
            </div>
            <div className="Services_list_wrap">
              <span className="Services_list_title">Development</span>
              <ul className="Services_list_description">
                <li>HTML/CSS/JS</li>
                <li>React/Angular/Vue</li>
                <li>Backend/API integrations</li>
                <li>React Native/Flutter/Native Script apps</li>
                <li>Speed Optimization</li>
                <li>WordPress</li>
              </ul>
            </div>
            <div className="Services_list_wrap">
              <span className="Services_list_title">E-Commerce</span>
              <ul className="Services_list_description">
                <li>Shopify</li>
                <li>WooCommerce</li>
                <li>BigCommerce</li>
                <li>Instacart</li>
                <li>Magento</li>
              </ul>
            </div>
            <div className="Services_list_wrap">
              <span className="Services_list_title">Content</span>
              <ul className="Services_list_description">
                <li>Copywriting</li>
                <li>Animation</li>
                <li>Iconography</li>
                <li>2D/3D graphics</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Service
