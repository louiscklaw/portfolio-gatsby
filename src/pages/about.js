import React from 'react'
import {Link} from 'gatsby'

// import DesktopLayout from '../components/desktop-layout'
import Layout from '../components/layout'

class AboutPage extends React.Component{

  render(){
    return(
      <Layout>
        about page
        <Link to="/project-list">back to project list</Link>
      </Layout>
    )
  }
}


export default AboutPage