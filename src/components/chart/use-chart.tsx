import { createContext, useContext } from "react";

import type { ChartConfig } from "./chart-types";

interface ChartContextProps {
  config: ChartConfig;
}

const ChartContext = createContext<ChartContextProps | null>(null);

const useChart = () => {
  const context = useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
};

export { ChartContext, useChart };
export type { ChartContextProps };
