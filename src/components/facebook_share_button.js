import React from 'react'

import StyleContext from '../contexts/StyleContext'

function FacebookShareButton(props){
  let href=props.location.href
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className="fb-share-button" data-href={href} data-layout="button_count" data-size="small">
      <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`} className="fb-xfbml-parse-ignore" rel="noreferrer">

        <span className={target_layout.iconWithSpace}>
          <i className="fab fa-facebook-square" aria-hidden="true" />
        </span>

        <span>Post to facebook</span>
        <div>{encodeURIComponent(href)}</div>


      </a>
    </div>
  )
}

export default FacebookShareButton