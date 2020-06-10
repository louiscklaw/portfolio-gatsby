import React from 'react'
import ImageLightBox from './image-lightbox'

import StyleContext from '../contexts/StyleContext'

function HeaderImage({src, caption}){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div style={{textAlign: 'center'}} className={target_layout.headerImage}>
       <figure>
        <ImageLightBox src={src} style={{maxWidth: "500px"}} />
        <figcaption style={{textDecoration:'underline'}}>{caption}</figcaption>
      </figure>

    </div>
  )
}

export default HeaderImage
