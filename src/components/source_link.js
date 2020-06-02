import React from 'react'

import StyleContext from '../contexts/StyleContext'

function SourceLink(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.sourceLink}>
      <a href="https://github.com/louiscklaw/portfolio-gatsby">
        souce code
      </a>
    </div>
  )
}

export default SourceLink