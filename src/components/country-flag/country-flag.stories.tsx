import type { Meta, StoryObj } from "@storybook/react";

import { CountryFlag } from "./country-flag";

const meta = {
  title: "Components/CountryFlag",
  component: CountryFlag,
  tags: ["autodocs"],
  argTypes: {
    code: {
      control: "select",
      options: ["US", "CZ", "ES", "FR", "DE", "IT", "PL", "PT"],
    },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof CountryFlag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { code: "US" },
};
