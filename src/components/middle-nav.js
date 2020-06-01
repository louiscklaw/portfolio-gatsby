import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

import DesktopMiddleNav from './desktop-middle-nav'
import MobileMiddleNav from './mobile-middle-nav'

function MiddleNav(){
  const {target_layout, isMobile} = React.useContext(StyleContext)

  return(
    <div className={target_layout.middleNav}>
      {isMobile() ? <MobileMiddleNav/> : <DesktopMiddleNav/>}
    </div>
  )
}


export default MiddleNav