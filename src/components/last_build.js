import React from 'react'

import {last_build_stamp} from '../last_build_stamp'

import StyleContext from '../contexts/StyleContext'

function LastBuild(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.lastBuild}>
      {last_build_stamp}
    </div>
  )
}

export default LastBuild