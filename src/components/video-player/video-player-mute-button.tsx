import type { ComponentProps } from "react";

import { MediaMuteButton } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerMuteButtonProps = ComponentProps<typeof MediaMuteButton>;

export const VideoPlayerMuteButton = ({
  className,
  ...props
}: VideoPlayerMuteButtonProps) => (
  <MediaMuteButton className={cn("p-2.5", className)} {...props} />
);
