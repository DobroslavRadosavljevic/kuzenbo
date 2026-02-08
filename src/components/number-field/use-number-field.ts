import { createContext, useContext } from "react";

export interface NumberFieldContext {
  id: string;
}

export const NumberFieldContext = createContext<NumberFieldContext | null>(
  null
);

export const useNumberField = () => {
  const context = useContext(NumberFieldContext);

  if (!context) {
    throw new Error("useNumberField must be used within a NumberField");
  }

  return context;
};
