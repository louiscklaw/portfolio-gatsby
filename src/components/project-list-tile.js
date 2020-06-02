import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

function ProjectListTile({link_to, bg_image, title}){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <Link to={link_to} className={target_layout.projectItem}>
      <li style={{backgroundImage:`url(${bg_image})`}}>
        <div className={target_layout.projectLink}>
          <div className={target_layout.backgroundDimmer}>
            <div className={target_layout.rightArrow}>
              <i className="fas fa-arrow-circle-right fa-2x"></i>
            </div>
            <div className={target_layout.projectTitle}>
              {title}
            </div>

          </div>
        </div>
      </li>
    </Link>
  )
}

export default ProjectListTile