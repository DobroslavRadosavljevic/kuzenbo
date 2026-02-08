import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { PaginationContent } from "./pagination-content";
import { PaginationEllipsis } from "./pagination-ellipsis";
import { PaginationItem } from "./pagination-item";
import { PaginationLink } from "./pagination-link";
import { PaginationNext } from "./pagination-next";
import { PaginationPrevious } from "./pagination-previous";

const Pagination = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="pagination"
    className={cn("mx-auto flex w-full justify-center", className)}
    data-slot="pagination"
    {...props}
  />
);

Pagination.Content = PaginationContent;
Pagination.Ellipsis = PaginationEllipsis;
Pagination.Item = PaginationItem;
Pagination.Link = PaginationLink;
Pagination.Next = PaginationNext;
Pagination.Previous = PaginationPrevious;

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
