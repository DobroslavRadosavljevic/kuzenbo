import type { Meta, StoryObj } from "@storybook/react";

import { Surface } from "./surface";

const meta = {
  title: "Components/Surface",
  component: Surface,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "tertiary", "quaternary"],
    },
  },
} satisfies Meta<typeof Surface>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Surface content" },
};
