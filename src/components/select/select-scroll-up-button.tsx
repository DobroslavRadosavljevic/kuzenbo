"use client";

import type { ComponentProps } from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";
import { ArrowUp01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const SelectScrollUpButton = ({
  className,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpArrow>) => (
  <SelectPrimitive.ScrollUpArrow
    className={cn(
      "top-0 z-10 flex w-full cursor-default items-center justify-center bg-popover py-1 [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="select-scroll-up-button"
    {...props}
  >
    <HugeiconsIcon icon={ArrowUp01Icon} strokeWidth={2} />
  </SelectPrimitive.ScrollUpArrow>
);

export { SelectScrollUpButton };
