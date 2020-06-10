import React from "react"
import PropTypes from "prop-types"

import LeftSideBar from './left-side-bar'
import Footer from './footer'

import StyleContext from '../contexts/StyleContext'
import GlobalContext from '../contexts/GlobalContext'

import "../style/layout.css"

function Layout({children}) {
  const {target_layout} = React.useContext(StyleContext)
  const {isMobile} = React.useContext(GlobalContext)

  return(
    <>
      <div className={target_layout.mainContainer}>
        <div className={target_layout.leftSideBar}>
          <LeftSideBar />
        </div>

        {children}

      </div>
      { isMobile() ? <Footer /> : ''}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
