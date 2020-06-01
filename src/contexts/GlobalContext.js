import React from "react"

const defaultState = {
  helloworld: false,
  helloworldFunc: () => {},
}

const GlobalContext = React.createContext(defaultState)

class GlobalContextProvider extends React.Component {
  state = {
    helloworld: false,
  }

  helloworldFunc = () => {
    console.log('dark ?')
    return 'helloworldFunc'
  }

  componentDidMount() {

  }

  render() {
    const { children } = this.props
    return (
      <GlobalContext.Provider
        value={{
          ...this.state,
          helloworldFunc: this.helloworldFunc,
        }}
      >
        {children}
      </GlobalContext.Provider>
    )
  }
}

export default GlobalContext

export { GlobalContextProvider }