import type { ComponentProps } from "react";

import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cn } from "tailwind-variants";

import { ScrollBar } from "@/components/scroll-area/scroll-bar";

const Table = ({ className, ...props }: ComponentProps<"table">) => (
  <ScrollAreaPrimitive.Root
    className="relative w-full rounded-lg border bg-card"
    data-slot="table-container"
  >
    <ScrollAreaPrimitive.Viewport className="size-full rounded-[inherit]">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        data-slot="table"
        {...props}
      />
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

export { TableBody } from "./table-body";
export { TableCaption } from "./table-caption";
export { TableCell } from "./table-cell";
export { TableFooter } from "./table-footer";
export { TableHead } from "./table-head";
export { TableHeader } from "./table-header";
export { TableRow } from "./table-row";
export { Table };
