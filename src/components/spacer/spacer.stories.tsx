import type { Meta, StoryObj } from "@storybook/react";

import { Spacer } from "./spacer";

const meta = {
  title: "Components/Spacer",
  component: Spacer,
  tags: ["autodocs"],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex w-64">
      <span>A</span>
      <Spacer />
      <span>B</span>
    </div>
  ),
};
