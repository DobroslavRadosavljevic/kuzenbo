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
    <Autocomplete defaultValue="a">
      <Autocomplete.Trigger>
        <Autocomplete.Value>{(v) => v || "Select option"}</Autocomplete.Value>
      </Autocomplete.Trigger>
      <Autocomplete.Content>
        <Autocomplete.Item value="a">Option A</Autocomplete.Item>
        <Autocomplete.Item value="b">Option B</Autocomplete.Item>
        <Autocomplete.Item value="c">Option C</Autocomplete.Item>
      </Autocomplete.Content>
    </Autocomplete>
  ),
};
