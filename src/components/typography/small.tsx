"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const smallVariants = tv({
  base: "font-medium text-sm leading-none",
});

type SmallProps = ComponentProps<"small">;

const Small = ({ className, ...props }: SmallProps) => (
  <small
    className={cn(smallVariants(), className)}
    data-slot="typography-small"
    {...props}
  />
);

export { Small, smallVariants };
export type { SmallProps };
