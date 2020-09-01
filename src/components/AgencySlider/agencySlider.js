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
    slidesToShow: 1.75,
    pauseOnHover: false,
    slidesToScroll: 1,
    rtl: { rtl },
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
    <div>
      <Slider
        {...settings}
        rtl={rtl}
        asNavFor={nav}
        ref={slider => (slider1 = slider)}
      >
        <div key={1}>
          <h3>1</h3>
        </div>
        <div key={2}>
          <h3>2</h3>
        </div>
        <div key={3}>
          <h3>3</h3>
        </div>
        <div key={4}>
          <h3>4</h3>
        </div>
        <div key={5}>
          <h3>5</h3>
        </div>
        <div key={6}>
          <h3>6</h3>
        </div>
      </Slider>
      <div style={{ textAlign: "center" }}>
        <button
          className="button"
          onMouseLeave={pause}
          onMouseOver={previous}
          onMouseMove={previous}
        >
          Previous
        </button>
        <button
          className="button"
          onMouseLeave={pause}
          onMouseMove={next}
          onMouseOver={next}
        >
          Next
        </button>
      </div>
    </div>
  )
}
