"use client";

import type { ComponentProps, CSSProperties } from "react";

import { MediaController } from "media-chrome/react";

const variables = {
  "--media-primary-color": "var(--primary)",
  "--media-secondary-color": "var(--background)",
  "--media-text-color": "var(--foreground)",
  "--media-background-color": "var(--background)",
  "--media-control-hover-background": "var(--accent)",
  "--media-font-family": "var(--font-sans)",
  "--media-live-button-icon-color": "var(--muted-foreground)",
  "--media-live-button-indicator-color": "var(--destructive)",
  "--media-range-track-background": "var(--border)",
} as CSSProperties;

export type VideoPlayerProps = ComponentProps<typeof MediaController>;

export const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
  <MediaController
    style={{
      ...variables,
      ...style,
    }}
    {...props}
  />
);

export {
  VideoPlayerContent,
  type VideoPlayerContentProps,
} from "./video-player-content";
export {
  VideoPlayerControlBar,
  type VideoPlayerControlBarProps,
} from "./video-player-control-bar";
export {
  VideoPlayerMuteButton,
  type VideoPlayerMuteButtonProps,
} from "./video-player-mute-button";
export {
  VideoPlayerPlayButton,
  type VideoPlayerPlayButtonProps,
} from "./video-player-play-button";
export {
  VideoPlayerSeekBackwardButton,
  type VideoPlayerSeekBackwardButtonProps,
} from "./video-player-seek-backward-button";
export {
  VideoPlayerSeekForwardButton,
  type VideoPlayerSeekForwardButtonProps,
} from "./video-player-seek-forward-button";
export {
  VideoPlayerTimeDisplay,
  type VideoPlayerTimeDisplayProps,
} from "./video-player-time-display";
export {
  VideoPlayerTimeRange,
  type VideoPlayerTimeRangeProps,
} from "./video-player-time-range";
export {
  VideoPlayerVolumeRange,
  type VideoPlayerVolumeRangeProps,
} from "./video-player-volume-range";
