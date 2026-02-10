import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { VideoPlayer } from "@/components/video-player/video-player";

afterEach(cleanup);

describe("VideoPlayer", () => {
  it("renders with content", () => {
    render(
      <VideoPlayer>
        <VideoPlayer.Content src="https://example.com/video.mp4" />
        <VideoPlayer.ControlBar />
      </VideoPlayer>
    );
    const video = document.querySelector("video");
    expect(video).toBeDefined();
  });

  it("renders play button", () => {
    render(
      <VideoPlayer>
        <VideoPlayer.Content src="https://example.com/video.mp4" />
        <VideoPlayer.ControlBar>
          <VideoPlayer.PlayButton />
        </VideoPlayer.ControlBar>
      </VideoPlayer>
    );
    const play = document.querySelector("[slot=playButton]");
    expect(play).toBeDefined();
  });
});
