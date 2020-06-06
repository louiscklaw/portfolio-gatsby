import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

function MobileMiddleNav(){
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
      </ul>
    </>
  )
}


export default MobileMiddleNav