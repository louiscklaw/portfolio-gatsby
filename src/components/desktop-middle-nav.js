import React from 'react'
import {Link} from 'gatsby'

import DebugMenu from './debug_menu'

import StyleContext from '../contexts/StyleContext'

function DesktopMiddleNav(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <>
      <ul>
        <li>
          <Link to="/project-list/" className={target_layout.mobileMenu}>
            projects
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            about
          </Link>
        </li>
        <li>
          <Link to="/credits/" className="is-text">
            credits
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            google search trend
          </Link>
        </li>

        <li>
          <a to="https://louiscklaw.github.io/travis-playlist/" className="is-text" target="_blank">
            travis build dashboard
          </a>
        </li>

        <DebugMenu />

      </ul>
    </>
  )
}


export default DesktopMiddleNav