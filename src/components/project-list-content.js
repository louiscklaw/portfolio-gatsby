import React from 'react'

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
          link_to="/allwinner-v3s-tryout/"
          bg_image="/allwinnerv3stryout_thumbnail.png"
          title="allwinner v3s tryout"
        />
        <ProjectListTile
          link_to="/hk-data-searcher/"
          bg_image="/hkdata_thumbnail.png"
          title="hkdata searcher"
        />
        <ProjectListTile
          link_to="/trading-view-dashboard/"
          bg_image="/trading-view-screenshot_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/my-linux-toolbox/"
          bg_image="/linuxtoolbox_thumbnail.png"
          title="my-linux-toolbox"
        />
        <ProjectListTile
          link_to="/opencv-car-counting-tryout/"
          bg_image="/opencvcarcounting_thumbnail.png"
          title="opencv car counting"
        />
        <ProjectListTile
          link_to="/pet-projects/"
          bg_image="/petpugproject_thumbnail.png"
          title="My pet projects"
        />
        <ProjectListTile
          link_to="/portfolio-tryout/"
          bg_image="/portfolio_thumbnail.png"
          title="portfolio"
        />
        <ProjectListTile
          link_to="/printer-board-tryout/"
          bg_image="/printerboard_thumbnail.png"
          title="printer board"
        />
        <ProjectListTile
          link_to="/rthk31-rthk32-linux-viewer/"
          bg_image="/rthk31rthk32linuxviewer_thumbnail.png"
          title="rthk31 rthk32 linux viewer"
        />
        <ProjectListTile
          link_to="/slic3r-tryout/"
          bg_image="/slic3r_thimbnail.png"
          title="slic3r tryout"
        />
        <ProjectListTile
          link_to="/tappy-tryout/"
          bg_image="/tappy_thumbnail.png"
          title="tappy tryout"
        />
        <ProjectListTile
          link_to="/traefik-tryout/"
          bg_image="/traefiktryout_thumbnail.png"
          title="traefik tryout"
        />
        <ProjectListTile
          link_to="/voron-tryout/"
          bg_image="/vorontryout_thumbnail.png"
          title="voron tryout"
        />
        <ProjectListTile
          link_to="/youtube-splitview-tryout/"
          bg_image="/youtubesplitviewtryout_thumbnail.png"
          title="youtube splitview tryout"
        />

      </ul>
    </>
  )
}

export default ProjectListContent