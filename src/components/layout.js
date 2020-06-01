import React from "react"
import PropTypes from "prop-types"

import LeftSideBar from './left-side-bar'
import Footer from './footer'

import GlobalContext from '../contexts/GlobalContext'

import desktop_layout from './desktop-layout.module.css'
import mobile_layout from './mobile-layout.module.css'

import "./layout.css"

function Layout({children}) {
  const {isMobile} = React.useContext(GlobalContext)
  let target_layout = isMobile()? mobile_layout:desktop_layout

  return(
    <>
      <div className={target_layout.mainContainer}>
        <div className={target_layout.leftSideBar}>
          <LeftSideBar />
        </div>

        {children}

      </div>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
