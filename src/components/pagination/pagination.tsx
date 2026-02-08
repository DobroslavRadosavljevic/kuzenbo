import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    data-slot="pagination"
    {...props}
  />
);

export { PaginationContent } from "./pagination-content";
export { PaginationEllipsis } from "./pagination-ellipsis";
export { PaginationItem } from "./pagination-item";
export { PaginationLink } from "./pagination-link";
export { PaginationNext } from "./pagination-next";
export { PaginationPrevious } from "./pagination-previous";
export { Pagination };
