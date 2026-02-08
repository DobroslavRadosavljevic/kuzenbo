"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

const ProgressLabel = ({
  className,
  ...props
}: ProgressPrimitive.Label.Props) => (
  <ProgressPrimitive.Label
    className={cn("font-medium text-sm", className)}
    data-slot="progress-label"
    {...props}
  />
);

export { ProgressLabel };
