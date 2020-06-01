import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

function MiddleNav(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <>
      <ul className={target_layout.middleNav}>
        <li>
          <Link to="/project-list/" className="is-text">
            projects
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            about
          </Link>
        </li>
        <li>
          <Link to="/project-list/" className="is-text">
            credits
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            google search trend
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            staging site
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            travis build dashboard
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            firebase console
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            favourite link
          </Link>
        </li>
        <li>
          <Link to="/about/" className="is-text">
            hackmd todo
          </Link>
        </li>
      </ul>
    </>
  )
}


export default MiddleNav