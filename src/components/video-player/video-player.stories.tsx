import type { Meta, StoryObj } from "@storybook/react";

import { VideoPlayer } from "./video-player";

const meta = {
  title: "Components/VideoPlayer",
  component: VideoPlayer,
  tags: ["autodocs"],
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <VideoPlayer className="w-lg aspect-video rounded-lg overflow-hidden">
      <VideoPlayer.Content
        src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
        preload="metadata"
      />
      <VideoPlayer.ControlBar>
        <VideoPlayer.SeekBackwardButton />
        <VideoPlayer.PlayButton />
        <VideoPlayer.SeekForwardButton />
        <VideoPlayer.TimeDisplay />
        <VideoPlayer.TimeRange />
        <VideoPlayer.MuteButton />
        <VideoPlayer.VolumeRange />
      </VideoPlayer.ControlBar>
    </VideoPlayer>
  ),
};
