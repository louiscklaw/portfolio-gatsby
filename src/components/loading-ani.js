import React from 'react'
import pong_loader from '../css/loaders/pong.module.css'

import style from './loading-ani.module.scss'

function LoadingAni(props){
  let {loading_text} = props
  return(
    <div className={style.aniLoadingContainer}>
      <div className={style.containerSpacer}></div>
      <div className={style.loadingAni}>
        <div className={pong_loader.pongLoader}>
          Loading
        </div>
      </div>
      <div className={style.containerSpacer}></div>
  <div className={style.loadingText}>{loading_text? loading_text: 'Please wait while loading'}</div>
      <div className={style.containerSpacer}></div>
    </div>
  )
}


export default LoadingAni