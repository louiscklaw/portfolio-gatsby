import React from 'react'

import {BUILD_DATE} from '../build_info'

import StyleContext from '../contexts/StyleContext'

function LastBuild(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.lastBuild}>
      last build: {BUILD_DATE}
    </div>
  )
}

export default LastBuild