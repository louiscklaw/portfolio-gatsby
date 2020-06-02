import React from 'react'

import StyleContext from '../contexts/StyleContext'

import ProjectListTile from './project-list-tile'

function ProjectListContent() {
  const {target_layout} = React.useContext(StyleContext)

  return(
    <>
      <ul className={target_layout.projectItemContainer}>
        <ProjectListTile
          link_to="/project-details/trading-view-dashboard/"
          bg_image="/tradingviewdashboard_thumbnail.png"
          title="trading view dashboard"
        />
        <ProjectListTile
          link_to="/project-details/appium-behave-notes/"
          bg_image="/appiumbehavenotes_thumbnail.png"
          title="appium behave notes"
        />
        <ProjectListTile
          link_to="/project-details/allwinner-v3s-tryout/"
          bg_image="/allwinnerv3stryout_thumbnail.png"
          title="allwinner v3s tryout"
        />
        <ProjectListTile
          link_to="/project-details/hk-data-searcher/"
          bg_image="/hkdata_thumbnail.png"
          title="hkdata searcher"
        />
        <ProjectListTile
          link_to="/project-details/hko-weather-bot/"
          bg_image="/hkoweatherbot_thumbnail.png"
          title="hko weather bot"
        />
        <ProjectListTile
          link_to="/project-details/my-linux-toolbox/"
          bg_image="/linuxtoolbox_thumbnail.png"
          title="my-linux-toolbox"
        />
        <ProjectListTile
          link_to="/project-details/opencv-car-counting-tryout/"
          bg_image="/opencvcarcounting_thumbnail.png"
          title="opencv car counting"
        />
        <ProjectListTile
          link_to="/project-details/pet-projects/"
          bg_image="/petpugproject_thumbnail.png"
          title="My pet projects"
        />
        <ProjectListTile
          link_to="/project-details/portfolio-tryout/"
          bg_image="/portfolio_thumbnail.png"
          title="portfolio"
        />
        <ProjectListTile
          link_to="/project-details/printer-board-tryout/"
          bg_image="/printerboard_thumbnail.png"
          title="printer board"
        />
        <ProjectListTile
          link_to="/project-details/rthk31-rthk32-linux-viewer/"
          bg_image="/rthk31rthk32linuxviewer_thumbnail.png"
          title="rthk31 rthk32 linux viewer"
        />
        <ProjectListTile
          link_to="/project-details/slic3r-tryout/"
          bg_image="/slic3r_thimbnail.png"
          title="slic3r tryout"
        />
        <ProjectListTile
          link_to="/project-details/tappy-tryout/"
          bg_image="/tappy_thumbnail.png"
          title="tappy tryout"
        />
        <ProjectListTile
          link_to="/project-details/traefik-tryout/"
          bg_image="/traefiktryout_thumbnail.png"
          title="traefik tryout"
        />
        <ProjectListTile
          link_to="/project-details/voron-tryout/"
          bg_image="/vorontryout_thumbnail.png"
          title="voron tryout"
        />
        <ProjectListTile
          link_to="/project-details/youtube-splitview-tryout/"
          bg_image="/youtubesplitviewtryout_thumbnail.png"
          title="youtube splitview tryout"
        />

      </ul>
    </>
  )
}

export default ProjectListContent