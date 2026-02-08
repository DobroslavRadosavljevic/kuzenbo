import type { ComponentProps } from "react";

import { MediaTimeDisplay } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerTimeDisplayProps = ComponentProps<
  typeof MediaTimeDisplay
>;

export const VideoPlayerTimeDisplay = ({
  className,
  ...props
}: VideoPlayerTimeDisplayProps) => (
  <MediaTimeDisplay className={cn("p-2.5", className)} {...props} />
);
