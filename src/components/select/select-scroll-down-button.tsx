"use client";

import type { ComponentProps } from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const SelectScrollDownButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollDownArrow>) => (
  <SelectPrimitive.ScrollDownArrow
    className={cn(
      "bottom-0 z-10 flex w-full cursor-pointer items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="select-scroll-down-button"
    {...props}
  >
    <HugeiconsIcon icon={ArrowDown01Icon} strokeWidth={2} />
  </SelectPrimitive.ScrollDownArrow>
);

export { SelectScrollDownButton };
