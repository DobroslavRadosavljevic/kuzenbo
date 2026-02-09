import type { Meta, StoryObj } from "@storybook/react";

import { Affix } from "./affix";

const meta = {
  title: "Components/Affix",
  component: Affix,
  tags: ["autodocs"],
} satisfies Meta<typeof Affix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Affix content",
    withinPortal: false,
    position: { bottom: 16, right: 16 },
  },
};
