import React from 'react'

import TestingRedbox from '../components/testing-redbox'
import GithubLink from '../components/github_link'
import NewWindowLink from '../components/new_window_link'
import ImageLightBox from '../components/image-lightbox'
import HeaderImage from '../components/header-image'
import YoutubeIframe from '../components/youtube-iframe'
import ProjectImage from '../components/project-image'

let short_code = {
  TestingRedbox,
  GithubLink,
  NewWindowLink,
  ImageLightBox,
  HeaderImage,
  YoutubeIframe,
  ProjectImage
}



export default {
  a: props => <a href={props.href}>{props.children}</a>,
  ...short_code
}
