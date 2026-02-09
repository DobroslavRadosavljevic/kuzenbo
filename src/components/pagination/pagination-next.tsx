import type { ComponentProps } from "react";

import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { PaginationLink } from "./pagination-link";

const PaginationNext = ({
  className,
  ...props
}: ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    className={cn("pr-1.5!", className)}
    size="default"
    {...props}
  >
    <span className="hidden sm:block">Next</span>
    <HugeiconsIcon
      data-icon="inline-end"
      icon={ArrowRight01Icon}
      strokeWidth={2}
    />
  </PaginationLink>
);

export { PaginationNext };
