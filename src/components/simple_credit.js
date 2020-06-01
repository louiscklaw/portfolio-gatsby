import React from 'react'
import {Link} from 'gatsby'

function SimpleCredit(){
  return(
    <div>
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