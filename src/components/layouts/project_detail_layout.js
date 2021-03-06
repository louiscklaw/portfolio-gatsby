import React from "react"
import PropTypes from "prop-types"

import LeftSideBar from '../left-side-bar'

import GlobalContext from '../../contexts/GlobalContext'

import desktop_layout from '../../style/desktop-layout.module.css'
import mobile_layout from '../../style/mobile-layout.module.css'
import "../../style/layout.css"


function ProjectDetailLayout({children}) {
  const {isMobile} = React.useContext(GlobalContext)
  let target_layout = isMobile()? mobile_layout:desktop_layout

  return(
    <>
      <div className={target_layout.mainContainer}>
        <div className={target_layout.leftSideBar}>
          <LeftSideBar />
        </div>


        <main>
          {children}
        </main>
      </div>
    </>
  )
}

ProjectDetailLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ProjectDetailLayout
