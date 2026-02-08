"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

import { ProgressIndicator } from "./progress-indicator";
import { ProgressTrack } from "./progress-track";

const Progress = ({
  className,
  children,
  value,
  ...props
}: ProgressPrimitive.Root.Props) => (
  <ProgressPrimitive.Root
    className={cn("flex flex-wrap gap-3", className)}
    data-slot="progress"
    value={value}
    {...props}
  >
    {children}
    <ProgressTrack>
      <ProgressIndicator />
    </ProgressTrack>
  </ProgressPrimitive.Root>
);

export { ProgressIndicator } from "./progress-indicator";
export { ProgressLabel } from "./progress-label";
export { ProgressTrack } from "./progress-track";
export { ProgressValue } from "./progress-value";
export { Progress };
