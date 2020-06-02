import React from 'react'
import {Link} from 'gatsby'

import GlobalContext from '../contexts/GlobalContext'

function BackToCatalogue(){
  const {isMobile} = React.useContext(GlobalContext)

  return(
    <>
      {isMobile() ? '' : <Link to="/project-list">Back to catalogue</Link>}
    </>
  )
}

export default BackToCatalogue