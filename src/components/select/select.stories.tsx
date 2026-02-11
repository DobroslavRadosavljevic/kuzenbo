import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "./select";

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <Select.Trigger className="min-w-48">
        <Select.Value placeholder="Select option" />
      </Select.Trigger>
      <Select.Content>
        <Select.Item value="a">Option A</Select.Item>
        <Select.Item value="b">Option B</Select.Item>
        <Select.Item value="c">Option C</Select.Item>
      </Select.Content>
    </Select>
  ),
};
