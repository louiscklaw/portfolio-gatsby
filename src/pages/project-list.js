import React from "react"

import Layout from "../components/layout"
// import Layout from "../components/desktop-layout"
import ProjectListContent from '../components/project-list-content'

import GlobalContext from '../contexts/GlobalContext'
import SEO from "../components/seo"

function IndexPage() {
  const test=React.useContext(GlobalContext)

  return(
    <Layout>
      <SEO title="Home" />
      <ProjectListContent />
    </Layout>
  )
}

export default IndexPage
