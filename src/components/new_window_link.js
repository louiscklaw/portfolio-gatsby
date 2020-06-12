import React from 'react'

function NewWindowLink(props){
  let href = props.href
  let children = props.children
  return(
    <span>
      <a href={href} target="_blank" rel="noreferrer">
        {children ? children : href}
        <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
      </a>
    </span>
  )
}

export default NewWindowLink
