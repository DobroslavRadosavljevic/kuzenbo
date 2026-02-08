"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const listVariants = tv({
  base: "my-6 ml-6 list-disc [&>li]:mt-2",
});

type ListProps = ComponentProps<"ul">;

const List = ({ className, ...props }: ListProps) => (
  <ul
    className={cn(listVariants(), className)}
    data-slot="typography-list"
    {...props}
  />
);

export { List, listVariants };
export type { ListProps };
