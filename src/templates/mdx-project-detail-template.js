import React from "react"
import { findDOMNode } from 'react-dom'

import BackToCatalogue from '../components/back_to_catalogue'
import ProjectDetailEnd from '../components/project-detail-end'

import Layout from '../components/layout'

import StyleContext from '../contexts/StyleContext'

import highlight from 'highlight.js'

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

          <ProjectDetailEnd/>

          <div className={target_layout.projectDetailFooter}>
            <BackToCatalogue />
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default MdxProjectDetailTemplate