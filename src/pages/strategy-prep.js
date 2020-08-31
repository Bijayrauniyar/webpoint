import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/portfolio"

const StrategyPrep = () => (
  <Layout>
    <SEO title="Strategy Prep" />
    <Portfolio
      projectName="Strategy Prep"
      projectSummary="LAST Prep organizes LSAT preparation courses and offers tutoring services."
      bannerImage="/images/Strategy-banner.png"
      goalsContent="The client wanted a modernized landing page to help visitors easily find the relavent information."
      processImage="/images/Strategy-process.png"
      resultContent="First of all, we developed a design system, so that all products of the company have a common style and adhere to the same rules in design. The interface has received significant improvements. Now the main functions have become more accessible, and thanks to the responsive design the site is convenient to use on any device."
      nextPage="/sweet-sanity"
    ></Portfolio>
  </Layout>
)

export default StrategyPrep
