import type { Meta, StoryObj } from "@storybook/react";

import { SunIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { ThemeIcon } from "./theme-icon";

const meta = {
  title: "Components/ThemeIcon",
  component: ThemeIcon,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "ghost",
        "link",
        "warning",
        "danger",
        "info",
        "success",
      ],
    },
    size: { control: "select", options: ["default", "sm", "lg", "xl"] },
  },
} satisfies Meta<typeof ThemeIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <ThemeIcon {...args}>
      <HugeiconsIcon icon={SunIcon} />
    </ThemeIcon>
  ),
};
