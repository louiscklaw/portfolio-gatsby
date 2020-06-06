import React from "react"

import { GlobalContextProvider } from "./src/contexts/GlobalContext"
import { StyleContextProvider } from './src/contexts/StyleContext'

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    <StyleContextProvider>
      {element}
    </StyleContextProvider>
  </GlobalContextProvider>
)
