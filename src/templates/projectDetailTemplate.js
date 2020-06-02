import React from "react"
import { graphql } from "gatsby"

import BackToCatalogue from '../components/back_to_catalogue'
import ProjectDetailEnd from '../components/project-detail-end'

import Layout from '../components/layout'

import StyleContext from '../contexts/StyleContext'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const {target_layout} = React.useContext(StyleContext)
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <div className={target_layout.projectDetailContainer}>

        <div className={target_layout.projectDetail}>

          <div className={target_layout.projectDetailHead}>
            <BackToCatalogue />
            <h1>{frontmatter.title}</h1>
            <h2>{frontmatter.date}</h2>
          </div>

          <div className={target_layout.projectDetailBody}>
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </div>

          <ProjectDetailEnd/>

          <div className={target_layout.projectDetailFooter}>
            <BackToCatalogue />
          </div>

        </div>

      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
