import React from 'react'
import {Link} from 'gatsby'

class LeftSideBar extends React.Component{
  render(){
    return(
      <ul>
        <li>
          <Link to="/project-list/" className="button">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about/" className="button">
            about
          </Link>
        </li>

      </ul>

    )
  }
}

export default LeftSideBar
