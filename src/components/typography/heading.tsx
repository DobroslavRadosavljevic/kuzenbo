"use client";

import type { ComponentProps } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv({
  base: "scroll-m-20 font-semibold tracking-tight",
  variants: {
    level: {
      1: "text-4xl lg:text-5xl",
      2: "border-b pb-2 text-3xl first:mt-0",
      3: "text-2xl",
      4: "text-xl",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

type HeadingVariants = VariantProps<typeof headingVariants>;

type HeadingProps = ComponentProps<"h1"> &
  HeadingVariants & {
    level?: 1 | 2 | 3 | 4;
  };

const Heading = ({ className, level = 1, ...props }: HeadingProps) => {
  const Element = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return (
    <Element
      className={cn(headingVariants({ level }), className)}
      data-slot="typography-heading"
      {...props}
    />
  );
};

export { Heading };
export type { HeadingProps, HeadingVariants };
