import React from 'react'

import GistLink from './gist-link'
import highlight from 'highlight.js'

import style from './gist.module.scss'
import LoadingAni from './loading-ani'

const get_pre_code = (ele_id,code_body, highglight_land) => {
return `
<pre><code id="${ele_id}" className="${highglight_land}">${code_body}</code></pre>
`.trim()
}

function Gist(props){
  let {gist_id, hl_lang} = props
  let random_id = `gist_id_${Math.random().toString().substring(2,10)}`

  React.useEffect(()=>{
    fetch(`https://gist.githubusercontent.com/${gist_id}/raw`)
    .then(res => res.text())
    .then(text => {

      document.querySelector(`.${style.gistSource}`).innerHTML = get_pre_code(random_id, text, hl_lang)
    })
    .then(() => {
      highlight.highlightBlock(document.querySelector(`#${random_id}`))
    })
  })

  return(
    <>
      <div className={style.gistContainer}>
        <div className={style.gistHead}>
          <GistLink {...props} />
        </div>
        <div className={style.gistBody}>
          <div className={style.gistSource}>
            <LoadingAni />
          </div>
        </div>
      </div>
    </>
  )
}

export default Gist
