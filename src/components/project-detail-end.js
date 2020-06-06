import React from 'react'

import StyleContext from '../contexts/StyleContext'

function ProjectDetailEnd(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.projectDetailEnd}>
      End
    </div>
  )
}

export default ProjectDetailEnd