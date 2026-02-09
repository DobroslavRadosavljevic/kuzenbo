import type { Meta, StoryObj } from "@storybook/react";

import { GoogleLogo } from "./google-logo";

const meta = {
  title: "Components/GoogleLogo",
  component: GoogleLogo,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "number" },
  },
} satisfies Meta<typeof GoogleLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
