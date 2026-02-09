import type { Meta, StoryObj } from "@storybook/react";

import { Combobox } from "./combobox";

const meta = {
  title: "Components/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Combobox defaultValue="a">
      <Combobox.Trigger>
        <Combobox.Value placeholder="Select option" />
      </Combobox.Trigger>
      <Combobox.Content>
        <Combobox.Item value="a">Option A</Combobox.Item>
        <Combobox.Item value="b">Option B</Combobox.Item>
        <Combobox.Item value="c">Option C</Combobox.Item>
      </Combobox.Content>
    </Combobox>
  ),
};
