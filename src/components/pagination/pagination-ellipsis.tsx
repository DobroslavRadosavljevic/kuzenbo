import type { ComponentProps } from "react";

import { MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const PaginationEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex size-8 items-center items-center justify-center justify-center [&_svg:not([class*='size-'])]:size-4",
      className
    )}
    data-slot="pagination-ellipsis"
    {...props}
  >
    <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
    <span className="sr-only">More pages</span>
  </span>
);

export { PaginationEllipsis };
