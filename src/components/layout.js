import React from "react"
import PropTypes from "prop-types"

import LeftSideBar from './left-side-bar'
import Footer from './footer'

import GlobalContext from '../contexts/GlobalContext'

import "./desktop-layout.css"

function Layout({children}) {
  return(
    <>
      <div className="main-container">
        <div className="left-side-bar">
          <LeftSideBar />
        </div>
        <main>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
