import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { BreadcrumbEllipsis } from "./breadcrumb-ellipsis";
import { BreadcrumbItem } from "./breadcrumb-item";
import { BreadcrumbLink } from "./breadcrumb-link";
import { BreadcrumbList } from "./breadcrumb-list";
import { BreadcrumbPage } from "./breadcrumb-page";
import { BreadcrumbSeparator } from "./breadcrumb-separator";

const Breadcrumb = ({ className, ...props }: ComponentProps<"nav">) => (
  <nav
    aria-label="breadcrumb"
    className={cn(className)}
    data-slot="breadcrumb"
    {...props}
  />
);

Breadcrumb.Ellipsis = BreadcrumbEllipsis;
Breadcrumb.Item = BreadcrumbItem;
Breadcrumb.Link = BreadcrumbLink;
Breadcrumb.List = BreadcrumbList;
Breadcrumb.Page = BreadcrumbPage;
Breadcrumb.Separator = BreadcrumbSeparator;

export {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
};
