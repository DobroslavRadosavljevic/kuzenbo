"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

import { ProgressIndicator } from "./progress-indicator";
import { ProgressLabel } from "./progress-label";
import { ProgressTrack } from "./progress-track";
import { ProgressValue } from "./progress-value";

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

Progress.Indicator = ProgressIndicator;
Progress.Label = ProgressLabel;
Progress.Track = ProgressTrack;
Progress.Value = ProgressValue;

export {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
};
