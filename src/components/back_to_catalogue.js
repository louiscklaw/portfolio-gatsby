import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'
import GlobalContext from '../contexts/GlobalContext'

function LeftArrow(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <span className={target_layout.backLeftArrow}>
      <i class="fas fa-chevron-circle-left"></i>
    </span>
  )
}

function BackToCatalogue({show_arrow}){
  const {isMobile} = React.useContext(GlobalContext)
  const {target_layout} = React.useContext(StyleContext)

  return(
    <>
      { show_arrow ? <LeftArrow /> : ''}
      {isMobile() ? '' : <Link to="/project-list">Back to catalogue</Link>}
    </>
  )
}

export default BackToCatalogue