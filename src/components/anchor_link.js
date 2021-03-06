import React from 'react'
import {Link} from 'gatsby'
import ClipboardJS from 'clipboard'

import anchor_link_style from './anchor_link.module.scss'
import StyleContext from '../contexts/StyleContext'
import GlobalContext from '../contexts/GlobalContext'

function AnchorLink(props){
  let html_shown = props.children
  let text_from_html_shown = html_shown.props.children
  const {target_layout} = React.useContext(StyleContext)
  const {isMobile} = React.useContext(GlobalContext)

  let diluted_text = text_from_html_shown
    .replace(/[ :]/g,'-')
    .replace(/[/]/g,'-or-')
    .replace(/--/g,'-')
    .replace(/-$/g,'')
    .toLowerCase()

  React.useEffect(()=>{
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
    <div className={target_layout.anchorLink}>
      <div className={[anchor_link_style.test, "clipboard-anchor-link"].join(' ')} >
        <Link
          className={anchor_link_style.anchorLink}
          to={props.path+'#'+diluted_text}
          id={diluted_text}
        >
          {html_shown}
        </Link>
        <span className={isMobile() ? anchor_link_style.linkIconMobile : anchor_link_style.linkIcon}>
          <i className="fa fa-link" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  )
}

export default AnchorLink