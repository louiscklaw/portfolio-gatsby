import React from 'react'

import StyleContext from '../contexts/StyleContext'

function BuildInfo(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.buildInfo}>
      <img src="https://travis-ci.com/louiscklaw/portfolio-preact.svg?branch=master"/>
    </div>
  )
}

export default BuildInfo