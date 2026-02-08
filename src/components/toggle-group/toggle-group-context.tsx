import type { VariantProps } from "tailwind-variants";

import { createContext } from "react";

import type { toggleVariants } from "@/components/toggle/toggle";

const ToggleGroupContext = createContext<
  VariantProps<typeof toggleVariants> & {
    spacing?: number;
    orientation?: "horizontal" | "vertical";
  }
>({
  size: "default",
  variant: "default",
  spacing: 0,
  orientation: "horizontal",
});

export { ToggleGroupContext };
