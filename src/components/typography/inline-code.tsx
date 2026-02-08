"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const inlineCodeVariants = tv({
  base: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
});

type InlineCodeProps = ComponentProps<"code">;

const InlineCode = ({ className, ...props }: InlineCodeProps) => (
  <code
    className={cn(inlineCodeVariants(), className)}
    data-slot="typography-inline-code"
    {...props}
  />
);

export { InlineCode, inlineCodeVariants };
export type { InlineCodeProps };
