import React from 'react'

function NewWindowLink({href, text}){
  return(
    <span>
      <a href={href} target="_blank" >
        <span>{text ? text : href}</span>
        <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}}></i>
        </a>
    </span>
  )
}

export default NewWindowLink
