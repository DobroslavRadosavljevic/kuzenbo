"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const paragraphVariants = tv({
  base: "not-first:mt-6 leading-7",
});

type ParagraphProps = ComponentProps<"p">;

const Paragraph = ({ className, ...props }: ParagraphProps) => (
  <p
    className={cn(paragraphVariants(), className)}
    data-slot="typography-paragraph"
    {...props}
  />
);

export { Paragraph, paragraphVariants };
export type { ParagraphProps };
