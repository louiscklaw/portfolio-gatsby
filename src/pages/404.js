import React from "react"
import {Link} from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import StyleContext from '../contexts/StyleContext'

function NotFoundPage() {
  const {target_layout} = React.useContext(StyleContext)

  return (
    <Layout>
      <SEO title="404: Not found" />
      <div className={target_layout.projectDetailContainer}>

        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>

        <Link to="/">click me return</Link>
      </div>
    </Layout>
  )
}

export default NotFoundPage
