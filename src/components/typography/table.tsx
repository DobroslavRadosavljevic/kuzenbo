"use client";

import type { ComponentProps } from "react";

import { cn, tv } from "tailwind-variants";

const tableVariants = tv({
  base: "w-full caption-bottom border-collapse text-sm",
});

type TableProps = ComponentProps<"table">;

const Table = ({ className, ...props }: TableProps) => (
  <table
    className={cn(tableVariants(), className)}
    data-slot="typography-table"
    {...props}
  />
);

export { Table, tableVariants };
export type { TableProps };
