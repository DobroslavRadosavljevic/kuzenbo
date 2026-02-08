import type { ComponentProps } from "react";

import { MediaVolumeRange } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerVolumeRangeProps = ComponentProps<
  typeof MediaVolumeRange
>;

export const VideoPlayerVolumeRange = ({
  className,
  ...props
}: VideoPlayerVolumeRangeProps) => (
  <MediaVolumeRange className={cn("p-2.5", className)} {...props} />
);
