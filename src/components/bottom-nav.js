import React from 'react'

import StyleContext from '../contexts/StyleContext'

import ConnectionList from './connection_list'
import TravisBuildInfo from './travis_build_info'
import SourceLink from './source_link'
import SimpleCredit from './simple_credit'
import LastBuild from './last_build'


function BottomNav(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.bottomNav}>
      <ConnectionList />
      <TravisBuildInfo />
      <SourceLink />
      <SimpleCredit />
      <LastBuild />
    </div>
  )
}

export default BottomNav