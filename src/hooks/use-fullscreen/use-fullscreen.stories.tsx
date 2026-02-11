import type { Meta, StoryObj } from "@storybook/react";

import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

import { useFullscreen } from "./use-fullscreen";

const FullscreenDemo = () => {
  const { ref, toggle, fullscreen } = useFullscreen();
  return (
    <div
      ref={ref}
      className={cn(
        "flex h-48 flex-col gap-4 rounded-lg bg-card p-6",
        "border border-border"
      )}
    >
      <div className="text-sm text-muted-foreground">
        Fullscreen: <strong>{fullscreen ? "Yes" : "No"}</strong>
      </div>
      <Button onClick={toggle}>
        {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </Button>
    </div>
  );
};

const NestedTargetDemo = () => {
  const { ref, toggle, fullscreen } = useFullscreen();
  return (
    <div className="flex w-96 flex-col gap-3 rounded-lg border border-border p-4">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">
          Fullscreen: <strong>{fullscreen ? "Yes" : "No"}</strong>
        </span>
        <Button size="sm" onClick={toggle}>
          {fullscreen ? "Exit" : "Expand"}
        </Button>
      </div>
      <div
        ref={ref}
        className={cn(
          "flex min-h-40 items-center justify-center rounded-lg",
          "bg-muted text-muted-foreground"
        )}
      >
        <span>Only this area goes fullscreen</span>
      </div>
    </div>
  );
};

const MediaContentDemo = () => {
  const { ref, toggle, fullscreen } = useFullscreen();
  return (
    <div className="flex w-[420px] flex-col gap-2 overflow-hidden rounded-lg border border-border">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <Button size="xs" onClick={toggle}>
          {fullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </Button>
        <span className="text-xs text-muted-foreground">
          {fullscreen ? "Press Exit or Esc to leave" : ""}
        </span>
      </div>
      <div
        ref={ref}
        className={cn(
          "flex aspect-video items-center justify-center",
          "bg-muted text-muted-foreground text-sm"
        )}
      >
        Media / video content (fullscreen target)
      </div>
    </div>
  );
};

const meta = {
  title: "Hooks/useFullscreen",
  component: FullscreenDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof FullscreenDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <FullscreenDemo />,
};

export const NestedTarget: Story = {
  render: () => <NestedTargetDemo />,
};

export const MediaContent: Story = {
  render: () => <MediaContentDemo />,
};
