import type { Meta, StoryObj } from "@storybook/react";

import { Command } from "./command";

const meta = {
  title: "Components/Command",
  component: Command,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Command>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Command className="w-64 rounded-lg border">
      <Command.Input placeholder="Search..." />
      <Command.List>
        <Command.Group>
          <Command.Item>Item 1</Command.Item>
          <Command.Item>Item 2</Command.Item>
          <Command.Item>Item 3</Command.Item>
        </Command.Group>
      </Command.List>
    </Command>
  ),
};
