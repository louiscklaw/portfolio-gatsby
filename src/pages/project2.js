import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

class Project2Page extends React.Component{
  render(){
    return(
      <Layout>
        <SEO title="project2" />
        <div>Project2Page</div>
        <Link to="/">Back</Link>
      </Layout>
    )
  }
}

export default Project2Page