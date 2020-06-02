import React from 'react'
import { Link } from "gatsby"

import GlobalContext from '../contexts/GlobalContext'

import desktop_layout from '../style/desktop-layout.module.css'
import mobile_layout from '../style/mobile-layout.module.css'

function ProjectListContent() {
  const {isMobile} = React.useContext(GlobalContext)
  let target_layout = isMobile()? mobile_layout:desktop_layout

  return(
    <>
      <ul className={target_layout.projectItemContainer}>
        <Link to="/trading-view-dashboard/" className={target_layout.projectItem}>
          <li style={{backgroundImage:'url(/trading-view-screenshot_thumbnail.png)'}}>
            <div className={target_layout.projectLink}>
              <div className={target_layout.rightArrow}>
                <i className="fas fa-arrow-circle-right fa-2x"></i>
              </div>
              <div className={target_layout.projectTitle}>
                trading view dashboard
              </div>
            </div>
          </li>
        </Link>
        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
        </Link>
      </ul>
    </>
  )
}

export default ProjectListContent