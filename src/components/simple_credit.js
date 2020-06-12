import React from 'react'
import {Link} from 'gatsby'

import StyleContext from '../contexts/StyleContext'

function SimpleCredit(){
  const {target_layout} = React.useContext(StyleContext)

  return(
    <div className={target_layout.simpleCredit}>
      <span role="img">💖</span> coded by louiscklaw. <br/>
      Built on the solder of <br/>
      <Link to="/credits/">THESE GIANTS</Link>
    </div>
  )
}

export default SimpleCredit