import React from 'react'

import {Link} from 'gatsby'

import GlobalContext from '../contexts/GlobalContext'

function DebugMenu(){
  const {checkStagingSite} = React.useContext(GlobalContext)

  const debug_menu =<>
    <li>
      <a href="https://console.firebase.google.com/u/1/project/portfolio-gatsby-f56ce/overview/"
        className="is-text" target="_blank" rel="noreferrer">
        firebase console
      </a>
    </li>
    <li>
      <a href="https://staging-portfolio-5c1c2.web.app/" className="is-text" target="_blank" rel="noreferrer">
        staging site
      </a>
    </li>
    <li>
      <Link to="/favourite_link/" className="is-text">
        favourite link
      </Link>
    </li>
    <li>
      <a href="https://hackmd.io/sXN16yjWQVqMh0hyy9yB1A" className="is-text" target="_blank" rel="noreferrer">
        hackmd todo
      </a>
    </li>
    </>


  // const debug_menu = showFirebaseConsole() + showStagingSiteLink() + showFavouriteLink() + showHackmdTodo()

  return(
    <>

        { checkStagingSite() ? debug_menu: '' }

    </>
  )
}

export default DebugMenu
