"use client";

import { Progress as ProgressPrimitive } from "@base-ui/react/progress";
import { cn } from "tailwind-variants";

const ProgressTrack = ({
  className,
  ...props
}: ProgressPrimitive.Track.Props) => (
  <ProgressPrimitive.Track
    className={cn(
      "relative flex h-1 w-full items-center overflow-x-hidden rounded-full bg-muted",
      className
    )}
    data-slot="progress-track"
    {...props}
  />
);

export { ProgressTrack };
