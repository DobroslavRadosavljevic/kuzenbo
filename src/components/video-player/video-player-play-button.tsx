import type { ComponentProps } from "react";

import { MediaPlayButton } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerPlayButtonProps = ComponentProps<typeof MediaPlayButton>;

export const VideoPlayerPlayButton = ({
  className,
  ...props
}: VideoPlayerPlayButtonProps) => (
  <MediaPlayButton
    className={cn("cursor-pointer p-2.5", className)}
    {...props}
  />
);
