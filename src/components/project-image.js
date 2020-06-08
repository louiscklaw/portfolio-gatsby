import React from 'react'
import ImageLightBox from './image-lightbox'

function ProjectImage(props){
  let src = props.src
  let caption = props.caption
  return(
    <div className="project-image" {...props} style={{padding: '2rem 0px'}}>
      <figure>
        <figcaption style={{textDecoration:'underline'}}>
          {caption}
        </figcaption>
        <ImageLightBox src={src} style={{maxWidth: "500px"}} />
      </figure>
    </div>
  )
}

export default ProjectImage