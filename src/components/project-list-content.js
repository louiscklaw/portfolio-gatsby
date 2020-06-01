import React from 'react'
import { Link } from "gatsby"

import GlobalContext from '../contexts/GlobalContext'

import desktop_layout from './desktop-layout.module.css'
import mobile_layout from './mobile-layout.module.css'

function ProjectListContent() {
  const {isMobile} = React.useContext(GlobalContext)
  let target_layout = isMobile()? mobile_layout:desktop_layout

  return(
    <>
      <ul className={target_layout.projectItemContainer}>
        <Link to="/project1/" className={target_layout.projectItem}>
          <li >project 1</li>
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