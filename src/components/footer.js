import React from 'react'

import StyleContext from '../contexts/StyleContext'

function Footer() {
  const {target_layout} = React.useContext(StyleContext)

    return(
      <footer className={target_layout.mobileFooter}>
        <div className={`content has-text-centered `+target_layout.footerContent}>
        <i className="far fa-copyright" aria-hidden="true" />
          2020 louislabs.
        </div>
      </footer>
    )

}

export default Footer