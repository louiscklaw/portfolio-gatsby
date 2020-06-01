import React from 'react'

import TopNav from './top-nav'
import MiddleNav from './middle-nav'
import BottomNav from './bottom-nav'


class LeftSideBar extends React.Component{
  render(){
    return(
      <>
        <TopNav></TopNav>
        <MiddleNav></MiddleNav>
        <BottomNav></BottomNav>
      </>
    )
  }
}

export default LeftSideBar
