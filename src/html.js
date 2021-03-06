import React from "react"
import PropTypes from "prop-types"

import FacebookChatPlugin from './facebook-chat-plugin'
import FirebaseInit from './firebase-init'
import GoogleAnalytics from './components/google-analytics'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="google-site-verification" content="hJ1dHfJE4S-mSj-o-4VthYmcv5-qA6TSm39-lJ0MTM0" />

        <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/js/all.min.js" integrity="sha256-+Q/z/qVOexByW1Wpv81lTLvntnZQVYppIL1lBdhtIq0=" crossOrigin="anonymous"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" integrity="sha256-46r060N2LrChLLb5zowXQ72/iKKNiw/lAmygmHExk/o=" crossOrigin="anonymous" />

        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.18.0/styles/monokai.min.css" integrity="sha256-/d3ZZC6Gr1V8JDi9Os6A2CjemarhIv16pw1Q6snL+lM=" crossOrigin="anonymous" />

        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>

        {/* TODO: remove me ? */}
        <div id="fb-root"></div>
        <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v7.0" nonce="RdFRrVUi"></script>

        <FacebookChatPlugin />

        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <FirebaseInit />

        <GoogleAnalytics />

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
