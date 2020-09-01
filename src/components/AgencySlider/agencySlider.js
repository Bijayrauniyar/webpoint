import React, { Component } from "react"
import Slider from "react-slick"
import "./agencySlider.scss"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function AgencySlider() {
  const [nav, setNav] = React.useState(null)
  const [rtl, setRtl] = React.useState(false)

  let slider1 = []

  React.useEffect(() => {
    setNav(slider1)
  }, [slider1])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoPlay: true,
    autoplaySpeed: 1000,
    slidesToShow: 2,
    pauseOnHover: false,
    slidesToScroll: 1,
    rtl: { rtl },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  const pause = () => {
    setRtl(false)
    slider1.slickPause()
  }
  const next = () => {
    setRtl(false)
    slider1.slickNext()
    slider1.slickPlay()
  }

  const previous = () => {
    setRtl(true)
    slider1.slickPrev()
    slider1.slickPlay()
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-end">
        <div className="col-lg-11 slider-wrap">
          <Slider
            {...settings}
            rtl={rtl}
            asNavFor={nav}
            ref={slider => (slider1 = slider)}
          >
            <div key={1}>
              <img src="/images/banner-1.png" alt="" />
            </div>
            <div key={2}>
              <img src="/images/banner-2.png" alt="" />
            </div>
            <div key={3}>
              <img src="/images/banner-3.png" alt="" />
            </div>
            <div key={4}>
              <img src="/images/banner-4.png" alt="" />
            </div>
            <div key={5}>
              <img src="/images/banner-5.png" alt="" />
            </div>
          </Slider>
          <button
            className="button button-prev"
            onMouseLeave={pause}
            onMouseOver={previous}
            onMouseMove={previous}
          >
            Previous
          </button>
          <button
            className="button button-next"
            onMouseLeave={pause}
            onMouseMove={next}
            onMouseOver={next}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
