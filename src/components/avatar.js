import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import StyleContext from "../contexts/StyleContext"

function Avatar() {
  const {target_layout} = React.useContext(StyleContext)

const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Img className={target_layout.avatarImg} fluid={data.placeholderImage.childImageSharp.fluid} />
  )
}

export default Avatar
