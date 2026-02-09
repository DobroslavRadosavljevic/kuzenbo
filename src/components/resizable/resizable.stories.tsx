import type { Meta, StoryObj } from "@storybook/react";

import { ResizablePanelGroup } from "./resizable";

const meta = {
  title: "Components/Resizable",
  component: ResizablePanelGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ResizablePanelGroup className="h-40 max-w-md">
      <ResizablePanelGroup.Panel defaultSize={50}>
        <div className="flex h-full items-center justify-center border-r p-4">
          Panel 1
        </div>
      </ResizablePanelGroup.Panel>
      <ResizablePanelGroup.Handle />
      <ResizablePanelGroup.Panel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-4">
          Panel 2
        </div>
      </ResizablePanelGroup.Panel>
    </ResizablePanelGroup>
  ),
};
