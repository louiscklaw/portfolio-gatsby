import React from 'react'

function GithubLink(props){
  let children = props.children
  return(
    <div>
      <a href={`//www.github.com/${props.repo_fullname}`}
        target="_blank" rel="noreferrer"
        >
        <span>{ children ? children : props.repo_fullname}</span>
        <i className="fab fa-github" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
        <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
        </a>
    </div>
  )
}

export default GithubLink
