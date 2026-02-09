import type { Meta, StoryObj } from "@storybook/react";

import { Pill } from "./pill";

const meta = {
  title: "Components/Pill",
  component: Pill,
  tags: ["autodocs"],
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Label" },
};
