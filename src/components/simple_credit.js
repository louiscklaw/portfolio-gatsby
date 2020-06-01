import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

function SimpleCredit(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.simpleCredit}>
      ❤️ coded by louiscklaw. Built on the solder of
      <Link to="/credits/">
        <a>
          THESE GIANTS
        </a>
      </Link>
    </div>
  )
}

export default SimpleCredit