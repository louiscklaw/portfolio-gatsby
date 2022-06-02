import React from "react";

import ThirdPartyProvider from "./src/contexts/ThirdPartyProvider";
import { ViewPortMeasureProvider } from "./src/contexts/ViewPortMeasureContext";

export const wrapRootElement = ({ element }) => (
  <ThirdPartyProvider>
    <ViewPortMeasureProvider>{element}</ViewPortMeasureProvider>
  </ThirdPartyProvider>
);
