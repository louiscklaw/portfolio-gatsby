import React from 'react'

import StyleContext from '../contexts/StyleContext'

function LinkedInShareButton(props){
  const {target_layout} = React.useContext(StyleContext)

  console.log(props)

  return(
    <>
      <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${props.location.href}`}>
        <span className={target_layout.iconWithSpace}><i class="fab fa-linkedin"></i></span>
        <span>share to linkedin</span>
      </a>
    </>
  )
}


export default LinkedInShareButton