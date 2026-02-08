import type { Meta, StoryObj } from "@storybook/react";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
} from "./input-group";

const meta = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
  subcomponents: {
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
  },
} satisfies Meta<typeof InputGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroup.Input placeholder="Enter text..." />
    </InputGroup>
  ),
};

export const WithAddonStart: Story = {
  render: () => (
    <InputGroup>
      <InputGroup.Addon align="inline-start">
        <InputGroup.Text>https://</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input placeholder="example.com" />
    </InputGroup>
  ),
};

export const WithAddonBothSides: Story = {
  render: () => (
    <InputGroup>
      <InputGroup.Addon align="inline-start">
        <InputGroup.Text>$</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input placeholder="0.00" type="number" />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Text>USD</InputGroup.Text>
      </InputGroup.Addon>
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: () => (
    <InputGroup>
      <InputGroup.Input placeholder="Search..." />
      <InputGroup.Addon align="inline-end">
        <InputGroup.Button>Search</InputGroup.Button>
      </InputGroup.Addon>
    </InputGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <InputGroup data-disabled="true">
      <InputGroup.Addon align="inline-start">
        <InputGroup.Text>@</InputGroup.Text>
      </InputGroup.Addon>
      <InputGroup.Input disabled placeholder="Disabled" />
    </InputGroup>
  ),
};
