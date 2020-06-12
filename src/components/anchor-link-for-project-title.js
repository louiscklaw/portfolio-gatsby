import React from 'react'
import ClipboardJS from 'clipboard'

import { useStaticQuery, graphql } from "gatsby"

import anchor_link_style from './anchor_link.module.scss'

import GlobalContext from '../contexts/GlobalContext'

function AnchorLinkForProjectTitle(props){
  const {isMobile} = React.useContext(GlobalContext)

  let html_shown = props.children
  let text_from_html_shown = html_shown.props.children

  let diluted_text = text_from_html_shown
    .replace(/[ :]/g,'-')
    .replace(/[/]/g,'-or-')
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

  let TXT_CLICK_TO_COPY_ANCHOR = 'click to copy anchor'
  let TXT_COPIED = 'copied !'

  return(
    <div>
      <div
        className={[anchor_link_style.test, "clipboard-anchor-link"].join(' ')}
        data-clipboard-text={[site.siteMetadata.siteUrl,props.path,'#'].join('')}
        data-tooltip="click to copy anchor"
        onClick={(e)=>{
          document.querySelector(`.${anchor_link_style.test}`).setAttribute('data-tooltip', TXT_COPIED)
          setTimeout(() => {
            document.querySelector(`.${anchor_link_style.test}`).setAttribute('data-tooltip', TXT_CLICK_TO_COPY_ANCHOR)
          }, 1000)
        }}
      >
        <div
          className={anchor_link_style.anchorLink}
          to={props.path+'#'}
          id={diluted_text}
        >
          {html_shown}
        </div>
        <span className={isMobile() ? anchor_link_style.linkIconMobile : anchor_link_style.linkIcon}>
          <i className="fa fa-link" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default AnchorLinkForProjectTitle