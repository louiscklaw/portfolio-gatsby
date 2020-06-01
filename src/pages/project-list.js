import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Layout from "../components/desktop-layout"

import GlobalContext from '../contexts/GlobalContext'
import SEO from "../components/seo"

function IndexPage() {
  const test=React.useContext(GlobalContext)
  console.log(test)


  React.useEffect(() => {
    console.log(test)
    console.log(test.helloworldFunc())
  })

  return(
    <Layout>
      <SEO title="Home" />
      <ul className="project-item-container">
        <Link to="/project1" className="project-item">
          <li>project 1</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 2</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 3</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 4</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 5</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 6</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 7</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 8</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 9</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 10</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 11</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 12</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 13</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 14</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 15</li>
        </Link>
        <Link to="/project1" className="project-item">
          <li>project 16</li>
        </Link>
      </ul>
    </Layout>
  )
}

export default IndexPage
