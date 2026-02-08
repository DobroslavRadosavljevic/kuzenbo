"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const largeVariants = tv({
  base: "font-semibold text-lg",
});

type LargeProps = ComponentProps<"div">;

const Large = ({ className, ...props }: LargeProps) => (
  <div
    className={cn(largeVariants(), className)}
    data-slot="typography-large"
    {...props}
  />
);

export { Large, largeVariants };
export type { LargeProps };
