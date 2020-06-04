import React from 'react'
import ImageLightBox from './image-lightbox'

function HeaderImage({src}){
  return(
    <div style={{textAlign: 'center'}}>
      <ImageLightBox src={src} style={{width: '50%',height: '50%'}} />
    </div>
  )
}

export default HeaderImage