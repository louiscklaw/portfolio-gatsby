import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'
import GlobalContext from '../contexts/GlobalContext'

import DesktopMiddleNav from './desktop-middle-nav'
import MobileMiddleNav from './mobile-middle-nav'

function MiddleNav(){
  const {target_layout} = React.useContext(StyleContext)
  const {isMobile} = React.useContext(GlobalContext)

  return(
    <div className={target_layout.middleNav}>
      {isMobile() ? <MobileMiddleNav/> : <DesktopMiddleNav/>}
    </div>
  )
}


export default MiddleNav