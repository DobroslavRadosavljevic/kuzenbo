import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "@/components/input/input";

import { FormField } from "./form-field";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <FormField>
      <FormField.Label htmlFor="email">Email</FormField.Label>
      <FormField.Content>
        <Input id="email" placeholder="you@example.com" type="email" />
      </FormField.Content>
    </FormField>
  ),
};
