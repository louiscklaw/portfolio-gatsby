import React from 'react'
import {Link} from 'gatsby'
import ClipboardJS from 'clipboard'

import { useStaticQuery, graphql } from "gatsby"

import anchor_link_style from './anchor_link.module.scss'

function AnchorLinkForProjectTitle(props){
  let html_shown = props.children
  let text_from_html_shown = html_shown.props.children

  let diluted_text = text_from_html_shown
    .replace(/[\ :]/g,'-')
    .replace(/[\/]/g,'-or-')
    .replace(/--/g,'-')
    .replace(/-$/g,'')
    .toLowerCase()

  const { site } = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              siteUrl
            }
          }
        }
      `
    )

  React.useEffect(()=>{
    new ClipboardJS('.clipboard-anchor-link');
    if (window.location.hash){
      try {
        if (document.querySelector(window.location.hash)){
          document.querySelector(window.location.hash).click()
        }
      } catch (err) {
      }
    }
  },[])

  return(
    <div>
      <div
        className={[anchor_link_style.test, "clipboard-anchor-link"].join(' ')}
        data-clipboard-text={[site.siteMetadata.siteUrl,props.path,'#'].join('')}
      >
        <div
          className={anchor_link_style.anchorLink}
          to={props.path+'#'}
          id={diluted_text}
        >
          {html_shown}
        </div>
        <span className={anchor_link_style.linkIcon}>
          <i className="fa fa-link" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default AnchorLinkForProjectTitle