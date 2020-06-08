import React from 'react'
import ImageLightBox from './image-lightbox'

function HeaderImage({src, caption}){
  return(
    <div style={{textAlign: 'center'}}>
       <figure>
        <ImageLightBox src={src} style={{maxWidth: "500px"}} />
        <figcaption style={{textDecoration:'underline'}}>{caption}</figcaption>
      </figure>

    </div>
  )
}

export default HeaderImage
