import React from "react"
import { MDXProvider } from "@mdx-js/react"

import BackToCatalogue from '../components/back_to_catalogue'
import ProjectDetailEnd from '../components/project-detail-end'

import Layout from '../components/layout'

import StyleContext from '../contexts/StyleContext'

import highlight from 'highlight.js'

import mdx_config from './_mdx_provider_config'

function MdxProjectDetailTemplate(props) {
  const {target_layout} = React.useContext(StyleContext)

  React.useEffect(()=>{
    // enable highlight using highlightjs
    document.querySelectorAll('code').forEach(ele => {
      highlight.highlightBlock(ele);
    })
  })

  return(
    <Layout>
      <MDXProvider components={mdx_config}>
        <div className={target_layout.projectDetailContainer}>
          <div className={target_layout.projectDetail}>

            <div className={target_layout.projectDetailHead}>
              <BackToCatalogue />
              <h1>{props._frontmatter.title}</h1>
              <h2 className={target_layout.projectDetailDate}>{props._frontmatter.date}</h2>
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