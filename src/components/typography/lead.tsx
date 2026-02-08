"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const leadVariants = tv({
  base: "text-muted-foreground text-xl",
});

type LeadProps = ComponentProps<"p">;

const Lead = ({ className, ...props }: LeadProps) => (
  <p
    className={cn(leadVariants(), className)}
    data-slot="typography-lead"
    {...props}
  />
);

export { Lead, leadVariants };
export type { LeadProps };
