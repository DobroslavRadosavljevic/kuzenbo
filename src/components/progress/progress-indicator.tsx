"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

const ProgressIndicator = ({
  className,
  ...props
}: ProgressPrimitive.Indicator.Props) => (
  <ProgressPrimitive.Indicator
    className={cn("h-full bg-primary transition-all", className)}
    data-slot="progress-indicator"
    {...props}
  />
);

export { ProgressIndicator };
