import React from 'react'

import GlobalContext from '../contexts/GlobalContext'

function GoogleAnalyticsPlaceholder(){
  return(
    <>
    </>
  )
}

function GoogleAnalyticsScript(){
  return(
    <>
      <script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-analytics.js"></script>

      <script dangerouslySetInnerHTML={{
        __html: `
          firebase.analytics();
          `,
      }}
      />
    </>
  )
}

function GoogleAnalytics(){
  const {development_plant} = React.useContext(GlobalContext)
  return(
    <>
      {development_plant? <GoogleAnalyticsPlaceholder />: <GoogleAnalyticsScript /> }
    </>
  )
}

export default GoogleAnalytics
