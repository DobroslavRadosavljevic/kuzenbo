import type { Meta, StoryObj } from "@storybook/react";

import { Rating } from "./rating";

const meta = {
  title: "Components/Rating",
  component: Rating,
  tags: ["autodocs"],
  argTypes: {
    rating: { control: "number", min: 0, max: 5, step: 0.5 },
    maxRating: { control: "number" },
    showValue: { control: "boolean" },
    editable: { control: "boolean" },
  },
} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { rating: 3 },
};
