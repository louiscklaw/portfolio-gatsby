import React from 'react'

// https://mdxjs.com/getting-started#mdxprovider

import AnchorLink from '../components/anchor_link'

export default {
  a: props => <a href={props.href}>{props.children}</a>
}