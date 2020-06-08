import React from "react"

import Layout from "../components/layout"
// import Layout from "../components/desktop-layout"
import ProjectListContent from '../components/project-list-content'

// import GlobalContext from '../contexts/GlobalContext'
import SEO from "../components/seo"

function IndexPage() {
  return(
    <Layout>
      <SEO
        title="my project list"
        description="this is project related to louis"
        author="louiscklaw"
        canonical='https://portfolio.louislabs.com/'
        og_image="/portfolio_thumbnail.png"
      />
      <ProjectListContent />
    </Layout>
  )
}

export default IndexPage
