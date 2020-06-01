import React from "react"

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
    const { windowInnerWidth, windowInnerHeight } = this.state;
    return windowInnerWidth < 501;

  }

  getWindowWidth = (window) => {
    return typeof window !== "undefined" ? window.innerWidth: 0
  }

  getWindowHeight = (window) => {
    return typeof window !== "undefined" ? window.innerHeight: 0
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