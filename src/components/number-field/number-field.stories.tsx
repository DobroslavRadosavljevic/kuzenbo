import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/label/label";

import { NumberField } from "./number-field";

const meta = {
  title: "Components/NumberField",
  component: NumberField,
  tags: ["autodocs"],
} satisfies Meta<typeof NumberField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <NumberField defaultValue={0}>
      <Label>Quantity</Label>
    </NumberField>
  ),
};
