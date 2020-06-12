import React from 'react'

import style from './gist-link.module.scss'

function GistLink(props){
  let {gist_id} = props
  return(
    <div className={style.sourceGistLink}>
      source gist:
      <a href={`//gist.github.com/${gist_id}`} style={{paddingLeft: '0.5rem'}}>
        {gist_id}
        <i className="fab fa-github" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
        <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
      </a>
    </div>
  )
}

export default GistLink


{/*
  <a href={`//gist.github.com/${props.repo_fullname}`} target="_blank" rel="noreferrer" >
    <span>{ children ? children : props.repo_fullname}</span>
    <i className="fab fa-github" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
    <i className="fas fa-external-link-alt" style={{marginLeft: '0.2rem'}} aria-hidden="true" />
  </a>
*/}


{/*
  <div className={style.sourceGistLink}>
    <a href={`//gist.github.com/${gist_id}`}>
      {gist_id}
    </a>
  </div>
*/}