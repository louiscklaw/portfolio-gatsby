import React from 'react'

import StyleContext from '../contexts/StyleContext'

function ConnectionList() {
  const {target_layout} = React.useContext(StyleContext)

    return(
      <div className={target_layout.connectionList}>
        <ul >
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-keybase fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-linkedin-in fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-slack fa-2x"></i>
            </a>
          </li>
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank">
              <i className="fab fa-telegram-plane fa-2x"></i>
            </a>
          </li>
        </ul>
      </div>
    )
  }

export default ConnectionList
