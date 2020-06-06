import React from 'react'

import Avatar from './avatar'
import StyleContext from '../contexts/StyleContext'

function TopNav(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.topNav}>
      <h1 className={target_layout.greetings}>Hi, I'm louis</h1>
      <div className={target_layout.avatarContainer}>
        <Avatar />
      </div>
    </div>
  )
}


export default TopNav