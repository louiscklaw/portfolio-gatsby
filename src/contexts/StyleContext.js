import React from "react"

import {MAX_MOBILE_SCREEN_WIDTH} from '../config'


import desktop_layout from '../style/desktop-layout.module.css'
import mobile_layout from '../style/mobile-layout.module.css'


const defaultState = {
  target_layout: desktop_layout
}

const StyleContext = React.createContext(defaultState)

class StyleContextProvider extends React.Component {
  constructor(props){
    super(props)
    this.state=defaultState
  }

  isMobile() {
    if (typeof window == "undefined") return false
    return window.innerWidth < MAX_MOBILE_SCREEN_WIDTH

  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      target_layout: this.isMobile()? mobile_layout: desktop_layout
    })


    window.addEventListener("resize", () => {
      this.setState({
        ...this.state,
        target_layout: this.isMobile()? mobile_layout: desktop_layout
      })

    // this.updateWidthAndHeight();
    })
  }

  render() {
    return (
      <StyleContext.Provider
        value={{
          ...this.state,
          isMobile: this.isMobile
        }}
      >
        {this.props.children}
      </StyleContext.Provider>
    )
  }
}

export default StyleContext

export { StyleContextProvider }