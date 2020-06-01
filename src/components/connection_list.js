import React from 'react'

import StyleContext from '../contexts/StyleContext'

function ConnectionList() {
  const {target_layout} = React.useContext(StyleContext)

    return(
      <ul className={target_layout.connectionList}>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-keybase fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-linkedin-in fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-slack fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="//www.facebook.com/louiscklaw" target="_blank">
            <i class="fab fa-telegram-plane fa-2x"></i>
          </a>
        </li>
      </ul>
    )
  }

export default ConnectionList
