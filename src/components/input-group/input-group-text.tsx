"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const InputGroupText = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "flex items-center gap-2 text-muted-foreground text-sm [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none",
      className
    )}
    {...props}
  />
);

export { InputGroupText };
