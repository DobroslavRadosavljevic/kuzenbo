import type { ComponentProps } from "react";

import { MediaTimeRange } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerTimeRangeProps = ComponentProps<typeof MediaTimeRange>;

export const VideoPlayerTimeRange = ({
  className,
  ...props
}: VideoPlayerTimeRangeProps) => (
  <MediaTimeRange className={cn("p-2.5", className)} {...props} />
);
