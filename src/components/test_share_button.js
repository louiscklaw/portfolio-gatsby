import React from 'react'

function TestShareButton({href}){
  return(
    <div class="fb-share-button" data-href={href} data-layout="button_count" data-size="small">
      <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">
        Post to facebook
      </a>
    </div>
  )
}

export default TestShareButton