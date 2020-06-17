import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'
import GlobalContext from '../contexts/GlobalContext'

function LeftArrow(){
  const {target_layout} = React.useContext(StyleContext)
  const {isMobile} = React.useContext(GlobalContext)

  if(isMobile()){
    return(
      <span className={target_layout.backLeftArrow}>
        <i className="fas fa-chevron-circle-left fa-3x"></i>
      </span>
    )
  }else{
    return(
      <span className={target_layout.backLeftArrow}>
        <i className="fas fa-chevron-circle-left"></i>
      </span>
    )
  }

}

function BackToCatalogue(props){
  const {isMobile} = React.useContext(GlobalContext)
  const {target_layout} = React.useContext(StyleContext)

  const {show_arrow} = props

  return(
    <div className={target_layout.backToCatalogueContainer}>
      <Link to="/project-list">
        { show_arrow ? <LeftArrow /> : ''}
        {isMobile() ? '' : "Back to catalogue"}
      </Link>
    </div>
  )
}

export default BackToCatalogue