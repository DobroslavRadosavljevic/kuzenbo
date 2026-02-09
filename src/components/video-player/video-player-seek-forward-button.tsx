import type { ComponentProps } from "react";

import { MediaSeekForwardButton } from "media-chrome/react";
import { cn } from "tailwind-variants";

export type VideoPlayerSeekForwardButtonProps = ComponentProps<
  typeof MediaSeekForwardButton
>;

export const VideoPlayerSeekForwardButton = ({
  className,
  ...props
}: VideoPlayerSeekForwardButtonProps) => (
  <MediaSeekForwardButton
    className={cn("cursor-pointer p-2.5", className)}
    {...props}
  />
);
