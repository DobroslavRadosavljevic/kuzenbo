"use client";

import type { ComponentProps } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

const smallHeadingVariants = tv({
  base: "scroll-m-20 font-medium tracking-tight",
  variants: {
    level: {
      1: "text-lg lg:text-xl",
      2: "border-b pb-2 text-lg first:mt-0",
      3: "text-base",
      4: "text-sm",
    },
  },
  defaultVariants: {
    level: 1,
  },
});

type SmallHeadingVariants = VariantProps<typeof smallHeadingVariants>;

type SmallHeadingProps = ComponentProps<"h1"> &
  SmallHeadingVariants & {
    level?: 1 | 2 | 3 | 4;
  };

const SmallHeading = ({
  className,
  level = 1,
  ...props
}: SmallHeadingProps) => {
  const Element = `h${level}` as "h1" | "h2" | "h3" | "h4";

  return (
    <Element
      className={cn(smallHeadingVariants({ level }), className)}
      data-slot="typography-small-heading"
      {...props}
    />
  );
};

export { SmallHeading };
export type { SmallHeadingProps, SmallHeadingVariants };
