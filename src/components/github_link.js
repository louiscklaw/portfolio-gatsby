import React from 'react'

function GithubLink(props){
  return(
    <div>
      <a href={`//www.github.com/${props.repo_fullname}`}
        target="_blank"
        >
        <span>{props.repo_fullname}</span>
        <i className="fab fa-github" style={{marginLeft: '0.2rem'}}></i>
        <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}}></i>
        </a>
    </div>
  )
}

export default GithubLink