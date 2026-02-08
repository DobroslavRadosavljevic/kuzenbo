import type { ComponentProps } from "react";

import { ArrowLeft01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { PaginationLink } from "./pagination-link";

const PaginationPrevious = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    className={cn("pl-1.5!", className)}
    size="default"
    {...props}
  >
    <HugeiconsIcon
      data-icon="inline-start"
      icon={ArrowLeft01Icon}
      strokeWidth={2}
    />
    <span className="hidden sm:block">Previous</span>
  </PaginationLink>
);

export { PaginationPrevious };
