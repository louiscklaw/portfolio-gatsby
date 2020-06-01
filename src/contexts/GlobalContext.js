import React from "react"

import {MAX_MOBILE_SCREEN_WIDTH} from '../config'

const defaultState = {
  helloworld: false,
  windowInnerWidth:0,
  windowInnerHeight:0,
  helloworldFunc: () => {},
  isMobile:()=>{}
}

const GlobalContext = React.createContext(defaultState)

class GlobalContextProvider extends React.Component {
  // state = defaultState

  constructor(props){
    super(props)
    this.state=defaultState
  }

  helloworldFunc = () => {
    return 'helloworldFunc'
  }

  isMobile() {
    if (typeof window == "undefined") return false
    return window.innerWidth < MAX_MOBILE_SCREEN_WIDTH

  }

  getWindowWidth = (window) => {
    if (typeof window == "undefined") return 0
    return window.innerWidth
  }

  getWindowHeight = (window) => {
    if (typeof window !== "undefined") return 0
    return window.innerHeight
  }

  checkIsMobile = (window) => {
    if (typeof window == "undefined") return false
    return window.innerWidth < 501
  }

  componentDidMount = () => {
    this.setState({
      ...this.state,
      windowInnerWidth: this.getWindowWidth(window),
      windowInnerHeight: this.getWindowHeight(window),
      isMobile: this.checkIsMobile(window)
    })
    console.log(this.state)

    window.addEventListener("resize", () => {
      this.setState({
        ...this.state,
        windowInnerWidth: this.getWindowWidth(window),
        windowInnerHeight: this.getWindowHeight(window),
        isMobile: this.checkIsMobile(window)
      })
      console.log(this.state)
    });

    // this.updateWidthAndHeight();
  }

  render() {
    const { children } = this.props
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          helloworldFunc: this.helloworldFunc,
          isMobile: this.isMobile
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext

export { GlobalContextProvider }