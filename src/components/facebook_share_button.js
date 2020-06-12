import React from 'react'

import StyleContext from '../contexts/StyleContext'

function FacebookShareButton(props){
  let href=props.location.href
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div class="fb-share-button" data-href={href} data-layout="button_count" data-size="small">
      <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(href)}`} class="fb-xfbml-parse-ignore">

        <span className={target_layout.iconWithSpace}>
          <i class="fab fa-facebook-square" aria-hidden="true" />
        </span>

        <span>Post to facebook</span>
        <div>{encodeURIComponent(href)}</div>


      </a>
    </div>
  )
}

export default FacebookShareButton