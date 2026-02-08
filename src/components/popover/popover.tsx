"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

const Popover = ({ ...props }: PopoverPrimitive.Root.Props) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);

export { Popover };
export { PopoverContent } from "./popover-content";
export { PopoverDescription } from "./popover-description";
export { PopoverHeader } from "./popover-header";
export { PopoverTitle } from "./popover-title";
export { PopoverTrigger } from "./popover-trigger";
