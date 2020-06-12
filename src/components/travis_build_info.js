import React from 'react'

import StyleContext from '../contexts/StyleContext'

function TravisBuildInfo(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.buildInfo}>
      <a href="https://travis-ci.com/louiscklaw/portfolio-gatsby" target="_blank" rel="noreferrer">
        <img src="https://travis-ci.com/louiscklaw/portfolio-gatsby.svg?branch=master" alt="current portfolio build status"/>
      </a>
    </div>
  )
}

export default TravisBuildInfo