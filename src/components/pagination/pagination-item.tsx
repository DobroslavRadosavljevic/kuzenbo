import type { ComponentProps } from "react";

const PaginationItem = ({ ...props }: ComponentProps<"li">) => (
  <li data-slot="pagination-item" {...props} />
);

export { PaginationItem };
