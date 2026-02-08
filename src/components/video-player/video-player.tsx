"use client";

import type { ComponentProps, CSSProperties } from "react";

import { MediaController } from "media-chrome/react";

import { VideoPlayerContent } from "./video-player-content";
import { VideoPlayerControlBar } from "./video-player-control-bar";
import { VideoPlayerMuteButton } from "./video-player-mute-button";
import { VideoPlayerPlayButton } from "./video-player-play-button";
import { VideoPlayerSeekBackwardButton } from "./video-player-seek-backward-button";
import { VideoPlayerSeekForwardButton } from "./video-player-seek-forward-button";
import { VideoPlayerTimeDisplay } from "./video-player-time-display";
import { VideoPlayerTimeRange } from "./video-player-time-range";
import { VideoPlayerVolumeRange } from "./video-player-volume-range";

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

const VideoPlayer = ({ style, ...props }: VideoPlayerProps) => (
  <MediaController
    style={{
      ...variables,
      ...style,
    }}
    {...props}
  />
);

VideoPlayer.Content = VideoPlayerContent;
VideoPlayer.ControlBar = VideoPlayerControlBar;
VideoPlayer.MuteButton = VideoPlayerMuteButton;
VideoPlayer.PlayButton = VideoPlayerPlayButton;
VideoPlayer.SeekBackwardButton = VideoPlayerSeekBackwardButton;
VideoPlayer.SeekForwardButton = VideoPlayerSeekForwardButton;
VideoPlayer.TimeDisplay = VideoPlayerTimeDisplay;
VideoPlayer.TimeRange = VideoPlayerTimeRange;
VideoPlayer.VolumeRange = VideoPlayerVolumeRange;

export type { VideoPlayerContentProps } from "./video-player-content";
export type { VideoPlayerControlBarProps } from "./video-player-control-bar";
export type { VideoPlayerMuteButtonProps } from "./video-player-mute-button";
export type { VideoPlayerPlayButtonProps } from "./video-player-play-button";
export type { VideoPlayerSeekBackwardButtonProps } from "./video-player-seek-backward-button";
export type { VideoPlayerSeekForwardButtonProps } from "./video-player-seek-forward-button";
export type { VideoPlayerTimeDisplayProps } from "./video-player-time-display";
export type { VideoPlayerTimeRangeProps } from "./video-player-time-range";
export type { VideoPlayerVolumeRangeProps } from "./video-player-volume-range";

export {
  VideoPlayer,
  VideoPlayerContent,
  VideoPlayerControlBar,
  VideoPlayerMuteButton,
  VideoPlayerPlayButton,
  VideoPlayerSeekBackwardButton,
  VideoPlayerSeekForwardButton,
  VideoPlayerTimeDisplay,
  VideoPlayerTimeRange,
  VideoPlayerVolumeRange,
};
