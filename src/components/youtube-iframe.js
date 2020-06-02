import React from 'react'

function YoutubeIframe({videoSrcURL, videoTitle}){
  return(
    <>
      <iframe
        src={videoSrcURL}
        title={videoTitle}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </>
  )
}

export default YoutubeIframe