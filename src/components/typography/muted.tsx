"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const mutedVariants = tv({
  base: "text-muted-foreground text-sm",
});

type MutedProps = ComponentProps<"p">;

const Muted = ({ className, ...props }: MutedProps) => (
  <p
    className={cn(mutedVariants(), className)}
    data-slot="typography-muted"
    {...props}
  />
);

export { Muted, mutedVariants };
export type { MutedProps };
