import type { Meta, StoryObj } from "@storybook/react";

import { Progress } from "./progress";

const meta = {
  title: "Components/Progress",
  component: Progress,
  tags: ["autodocs"],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { value: 60 },
  render: (args) => (
    <Progress {...args}>
      <Progress.Label>Progress</Progress.Label>
      <Progress.Value />
    </Progress>
  ),
};
