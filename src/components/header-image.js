import React from 'react'
import ImageLightBox from './image-lightbox'

function HeaderImage(){
  return(
    <div style={{textAlign: 'center'}}>
      <ImageLightBox src="/hk-data-search.png" style={{width: '50%',height: '50%'}} />
    </div>
  )
}

export default HeaderImage