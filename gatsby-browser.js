import React from "react"

import { GlobalContextProvider } from "./src/contexts/GlobalContext"

export const wrapRootElement = ({ element }) => (
  <GlobalContextProvider>
    {element}
  </GlobalContextProvider>
)
