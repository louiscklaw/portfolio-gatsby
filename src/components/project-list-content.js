import React from 'react'
import { Link } from "gatsby"

import StyleContext from '../contexts/StyleContext'

import ProjectListTile from './project-list-tile'

function ProjectListContent() {
  const {target_layout} = React.useContext(StyleContext)

  return(
    <>
      <ul className={target_layout.projectItemContainer}>
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/appium-behave-notes/"
          bg_image="/appiumbehavenotes_thumbnail.png"
          title="appium behave notes"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />






      </ul>
    </>
  )
}

export default ProjectListContent