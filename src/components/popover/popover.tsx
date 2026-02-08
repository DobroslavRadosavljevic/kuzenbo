"use client";

import { Popover as PopoverPrimitive } from "@base-ui/react/popover";

import { PopoverContent } from "./popover-content";
import { PopoverDescription } from "./popover-description";
import { PopoverHeader } from "./popover-header";
import { PopoverTitle } from "./popover-title";
import { PopoverTrigger } from "./popover-trigger";

const Popover = ({ ...props }: PopoverPrimitive.Root.Props) => (
  <PopoverPrimitive.Root data-slot="popover" {...props} />
);

Popover.Content = PopoverContent;
Popover.Description = PopoverDescription;
Popover.Header = PopoverHeader;
Popover.Title = PopoverTitle;
Popover.Trigger = PopoverTrigger;

export {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
};
