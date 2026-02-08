import type { ComponentProps } from "react";

import { Loading03Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type SpinnerProps = ComponentProps<"svg">;

const Spinner = ({ className, strokeWidth = 2, ...props }: SpinnerProps) => (
  <HugeiconsIcon
    aria-label="Loading"
    className={cn("size-4 animate-spin", className)}
    icon={Loading03Icon}
    role="status"
    strokeWidth={
      typeof strokeWidth === "string" ? Number(strokeWidth) : strokeWidth
    }
    {...props}
  />
);

export { Spinner };
