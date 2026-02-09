import type { Meta, StoryObj } from "@storybook/react";

import { ScrollArea } from "./scroll-area";

const meta = {
  title: "Components/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
} satisfies Meta<typeof ScrollArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-40 w-64 rounded-md border">
      <div className="flex flex-col gap-2 p-4">
        {Array.from({ length: 20 }, (_, i) => (
          <p key={i} className="text-sm">
            Item {i + 1}
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};
