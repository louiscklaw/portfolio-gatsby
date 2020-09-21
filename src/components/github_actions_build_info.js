import React from 'react'

import StyleContext from '../contexts/StyleContext'

function GithubActionsBuildInfo(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.buildInfo}>
      <a href="https://github.com/louiscklaw/portfolio-gatsby/actions?query=branch%3Amaster" target="_blank" rel="noreferrer">
        <img src="https://github.com/louiscklaw/portfolio-gatsby/workflows/master_build/badge.svg" alt="current portfolio build status"/>
      </a>
    </div>
  )
}

export default GithubActionsBuildInfo
