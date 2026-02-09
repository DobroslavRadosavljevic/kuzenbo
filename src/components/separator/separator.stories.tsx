import type { Meta, StoryObj } from "@storybook/react";

import { Separator } from "./separator";

const meta = {
  title: "Components/Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { orientation: "horizontal" },
  render: (args) => (
    <div className="flex w-full flex-col gap-4">
      <p className="text-sm">Content above</p>
      <Separator {...args} />
      <p className="text-sm">Content below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-8 items-center gap-2">
      <span>Item 1</span>
      <Separator orientation="vertical" />
      <span>Item 2</span>
    </div>
  ),
};
