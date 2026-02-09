import type { ComponentProps } from "react";

import { MoreHorizontalCircle01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: ComponentProps<"span">) => (
  <span
    aria-hidden="true"
    className={cn(
      "flex size-5 items-center justify-center [&>svg]:size-4",
      className
    )}
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    {...props}
  >
    <HugeiconsIcon icon={MoreHorizontalCircle01Icon} strokeWidth={2} />
    <span className="sr-only">More</span>
  </span>
);

export { BreadcrumbEllipsis };
