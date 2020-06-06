import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import SEO from "../components/seo"

class Project1Page extends React.Component{
  render(){
    return(
      <Layout>
        <SEO title="project1" />
        <div>Project1Page</div>
        <Link to="/project-list">Back to project list</Link>
      </Layout>
    )
  }
}

export default Project1Page