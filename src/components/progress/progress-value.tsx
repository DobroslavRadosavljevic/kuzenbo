"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

const ProgressValue = ({
  className,
  ...props
}: ProgressPrimitive.Value.Props) => (
  <ProgressPrimitive.Value
    className={cn(
      "ml-auto text-muted-foreground text-sm tabular-nums",
      className
    )}
    data-slot="progress-value"
    {...props}
  />
);

export { ProgressValue };
