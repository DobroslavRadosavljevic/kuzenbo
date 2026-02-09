import type { Meta, StoryObj } from "@storybook/react";

import { Kbd } from "./kbd";

const meta = {
  title: "Components/Kbd",
  component: Kbd,
  tags: ["autodocs"],
} satisfies Meta<typeof Kbd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Kbd>⌘</Kbd>
      <Kbd.Group>
        <Kbd>⌘</Kbd>
        <span>K</span>
      </Kbd.Group>
    </div>
  ),
};
