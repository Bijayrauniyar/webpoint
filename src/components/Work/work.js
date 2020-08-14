import React from "react"
import "../../css/base.scss"
import "../../css/variables.scss"
import "../../css/fonts.scss"
import "../../css/components.scss"
import "./work.scss"

const Work = () => (
  <section className="Work">
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <span className="section-title">Our Work</span>
          <div className="Work_list">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Lineage.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Lineage Journey</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </div>
          <div className="Work_list">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Cryptox.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Cryptox</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </div>
          <div className="Work_list">
            <video
              muted
              playsInline
              crossOrigin
              loop
              poster
              preload="auto"
              autoPlay
            >
              <source src="videos/Newstart.webm" type="video/webm" />
            </video>
            <div className="Work_list_title">Newstart</div>
            <div className="Work_list_description">
              UX/UI, Mobile, Fron-end, Back-end
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="Work_list">
                <img src="images/Youth-Summit.png" alt="" />
                <div className="Work_list_title">Youth Summit</div>
                <div className="Work_list_description">
                  UX/UI, Mobile, Fron-end, Back-end
                </div>
              </div>
              <div className="Work_list">
                <img src="images/Children's-Century.png" alt="" />
                <div className="Work_list_title">
                  Children's Century ClassNameics
                </div>
              </div>
              <div className="Work_list">
                <img src="images/Family-Home-Christian-Books.png" alt="" />
                <div className="Work_list_title">
                  Family Home Christian Books
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 mt185">
              <div className="Work_list">
                <img src="images/Corniche-Watches.png" alt="" />
                <div className="Work_list_title">Corniche Watches</div>
              </div>
              <div className="Work_list">
                <img src="images/LSAT-Preparation.png" alt="" />
                <div className="Work_list_title">LSAT Preparation</div>
              </div>
              <div className="Work_list">
                <img src="images/Plate-App.png" alt="" />
                <div className="Work_list_title">Plate App</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Work
