import React from 'react'

import StyleContext from '../contexts/StyleContext'

function ConnectionList() {
  const {target_layout} = React.useContext(StyleContext)

    return(
      <div className={target_layout.connectionList}>
        <ul >
          <li>
            <a href="//www.facebook.com/louiscklaw" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook fa-2x" aria-hidden="true" />

            </a>
          </li>
          <li>
            <a href="//github.com/louiscklaw/" target="_blank" rel="noreferrer">
              <i className="fab fa-github fa-2x" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="//keybase.io/louiscklaw" target="_blank" rel="noreferrer">
              <i className="fab fa-keybase fa-2x" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="//hk.linkedin.com/in/louiscklaw" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin-in fa-2x" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="//louislabs.slack.com" target="_blank" rel="noreferrer">
              <i className="fab fa-slack fa-2x" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a href="//t.me/louislabs" target="_blank" rel="noreferrer">
              <i className="fab fa-telegram-plane fa-2x" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    )
  }

export default ConnectionList
