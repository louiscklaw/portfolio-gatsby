import React from "react"
import { Link } from "gatsby"

// import DesktopLayout from "../components/desktop-layout"
import Layout from '../components/layout'
import Main from '../components/main.js'

import SEO from "../components/seo"

function IndexPage() {

  return(
    <Layout>
      <SEO title="Home" />
    </Layout>
  )
}

export default IndexPage
