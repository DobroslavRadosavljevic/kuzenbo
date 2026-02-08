"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const blockquoteVariants = tv({
  base: "mt-6 border-l-2 pl-6 italic",
});

type BlockquoteProps = ComponentProps<"blockquote">;

const Blockquote = ({ className, ...props }: BlockquoteProps) => (
  <blockquote
    className={cn(blockquoteVariants(), className)}
    data-slot="typography-blockquote"
    {...props}
  />
);

export { Blockquote, blockquoteVariants };
export type { BlockquoteProps };
