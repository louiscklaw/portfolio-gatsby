import React from 'react'

import {last_build_stamp} from '../last_build_stamp'

function LastBuild(){
  return(
    <>
      {last_build_stamp}
    </>
  )
}

export default LastBuild