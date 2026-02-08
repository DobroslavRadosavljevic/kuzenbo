import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

type PaginationLinkProps = {
  isActive?: boolean;
} & Pick<ComponentProps<typeof Button>, "size"> &
  ComponentProps<"a">;

const PaginationLink = ({
  className,
  isActive,
  size = "icon",
  ...props
}: PaginationLinkProps) => (
  <Button
    className={cn(className)}
    nativeButton={false}
    render={
      <a
        aria-current={isActive ? "page" : undefined}
        aria-label="pagination link"
        data-active={isActive}
        data-slot="pagination-link"
        {...props}
      />
    }
    size={size}
    variant={isActive ? "outline" : "ghost"}
  />
);

export { PaginationLink };
export type { PaginationLinkProps };
