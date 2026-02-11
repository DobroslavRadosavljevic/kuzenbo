import type { Meta, StoryObj } from "@storybook/react";

import { Autocomplete } from "./autocomplete";

const meta = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Autocomplete defaultValue="Option A">
      <Autocomplete.Input placeholder="Search options..." />
      <Autocomplete.Content>
        <Autocomplete.Item value="Option A">Option A</Autocomplete.Item>
        <Autocomplete.Item value="Option B">Option B</Autocomplete.Item>
        <Autocomplete.Item value="Option C">Option C</Autocomplete.Item>
      </Autocomplete.Content>
    </Autocomplete>
  ),
};
