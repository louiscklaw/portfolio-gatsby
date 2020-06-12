import React from "react"
import { MDXProvider } from "@mdx-js/react"
import highlight from 'highlight.js'

import AnchorLinkForProjectTitle from '../components/anchor-link-for-project-title'
import SEO from "../components/seo"
import BackToCatalogue from '../components/back_to_catalogue'
import Layout from '../components/layout'
import FacebookShareButton from '../components/facebook_share_button'

import StyleContext from '../contexts/StyleContext'

import mdx_shortcode from './mdx_shortcode'
import LinkedInShareButton from "../components/linkedin-share-button"

function Tags(props){
  const {target_layout} = React.useContext(StyleContext)

  if (typeof(props._frontmatter.tags) == "undefined"){
    return(
      <>
      </>
    )
  }else{
    return (
      <div className={target_layout.tagsList}>
        <div className="tags are-medium">
          {
            props._frontmatter.tags.map( x => <span className="tag">{x}</span> )
          }
        </div>
      </div>
    )
  }
}

function DateLabel(props){
  const {target_layout} = React.useContext(StyleContext)

  if (props._frontmatter.date){
    return (
      <div className={target_layout.dateLabel} >
        <div className={target_layout.dateIcon}>
          <i class="fas fa-calendar-alt" aria-hidden="true" />
        </div>
        <div>
          {props._frontmatter.date}
        </div>
      </div>
    )
  }else{
    return(
      <></>
    )
  }
}



function SharePost(props){
  const {target_layout} = React.useContext(StyleContext)
  return(
    <div className={target_layout.sharePost}>
      <div className={target_layout.shareIcon}>
        <i className="fas fa-share-alt" aria-hidden="true" />
      </div>
      <div style={{display: 'none'}}>
        <FacebookShareButton {...props}/>
        <LinkedInShareButton {...props}/>
      </div>
    </div>
  )
}

function AboutMeTemplate(props) {
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

        <div className={target_layout.aboutMeDetailContainer} >
          <div className={target_layout.aboutMeDetail}>

            <div className={target_layout.detailHead}>
              <BackToCatalogue />

              <div style={{textAlign: "center"}}>
                <AnchorLinkForProjectTitle {...props}>
                  <h1>{props._frontmatter.title}</h1>
                </AnchorLinkForProjectTitle>
                <Tags {...props} />
              </div>

              <div className={target_layout.detailDate} >
                <DateLabel {...props} />
                {/* <SharePost {...props} /> */}
              </div>

            </div>

            <div className={target_layout.detailBody}>
              <div className={target_layout.paperLayout}>
                {props.children}

                <div className={target_layout.pageBackButton}>
                  <BackToCatalogue show_arrow={true} />
                </div>

              </div>
              <div>

              </div>
            </div>

            <div className={target_layout.detailFooter}>

            </div>

          </div>
        </div>


      </MDXProvider>
    </Layout>
  )
}

export default AboutMeTemplate
