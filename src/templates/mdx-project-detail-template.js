import React from "react"
import { MDXProvider } from "@mdx-js/react"
import highlight from 'highlight.js'

import AnchorLinkForProjectTitle from '../components/anchor-link-for-project-title'
import SEO from "../components/seo"
import BackToCatalogue from '../components/back_to_catalogue'
import Layout from '../components/layout'

import StyleContext from '../contexts/StyleContext'

import mdx_shortcode from './mdx_shortcode'

function MdxProjectDetailTemplate(props) {
  const {target_layout} = React.useContext(StyleContext)

  React.useEffect(()=>{
    // enable highlight using highlightjs
    document.querySelectorAll('code').forEach(ele => {
      highlight.highlightBlock(ele);
    })
  },[])

  return(
    <Layout>
      <SEO
        title={props._frontmatter.title}
        description={props._frontmatter.description}
        keywords={props._frontmatter.keywords}
      />
      <MDXProvider components={mdx_shortcode}>
        <div className={target_layout.projectDetailContainer}>
          <div className={target_layout.projectDetail}>

            <div className={target_layout.projectDetailHead}>
              <BackToCatalogue />
              <AnchorLinkForProjectTitle {...props}>
                <h1>{props._frontmatter.title}</h1>
              </AnchorLinkForProjectTitle>

              <h2 className={target_layout.projectDetailDate}>
                <span className="fa-calendar-icon">
                  <i class="fas fa-calendar-alt"></i>
                </span>
                {props._frontmatter.date}
              </h2>

            </div>

            <div className={target_layout.projectDetailBody}>

              {props.children}
            </div>

            <div className={target_layout.projectDetailFooter}>
              <BackToCatalogue />
            </div>

          </div>
        </div>
      </MDXProvider>
    </Layout>
  )
}

export default MdxProjectDetailTemplate
