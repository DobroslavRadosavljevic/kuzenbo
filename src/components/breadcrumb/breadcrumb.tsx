import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const Breadcrumb = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="breadcrumb"
    className={cn(className)}
    data-slot="breadcrumb"
    {...props}
  />
);

export { BreadcrumbEllipsis } from "./breadcrumb-ellipsis";
export { BreadcrumbItem } from "./breadcrumb-item";
export { BreadcrumbLink } from "./breadcrumb-link";
export { BreadcrumbList } from "./breadcrumb-list";
export { BreadcrumbPage } from "./breadcrumb-page";
export { BreadcrumbSeparator } from "./breadcrumb-separator";
export { Breadcrumb };
