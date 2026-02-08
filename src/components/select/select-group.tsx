"use client";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { cn } from "tailwind-variants";

const SelectGroup = ({ className, ...props }: SelectPrimitive.Group.Props) => (
  <SelectPrimitive.Group
    className={cn("scroll-my-1 p-1", className)}
    data-slot="select-group"
    {...props}
  />
);

export { SelectGroup };
