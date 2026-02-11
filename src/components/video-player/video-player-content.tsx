import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

export type VideoPlayerContentProps = ComponentProps<"video">;

export const VideoPlayerContent = ({
  className,
  ...props
}: VideoPlayerContentProps) => (
  <video slot="media" className={cn("mt-0 mb-0", className)} {...props}>
    <track kind="captions" />
  </video>
);
