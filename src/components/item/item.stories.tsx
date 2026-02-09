import type { Meta, StoryObj } from "@storybook/react";

import { Item } from "./item";

const meta = {
  title: "Components/Item",
  component: Item,
  tags: ["autodocs"],
} satisfies Meta<typeof Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Item>
      <Item.Header>
        <Item.Title>Item Title</Item.Title>
      </Item.Header>
      <Item.Content>
        <Item.Description>Item description content</Item.Description>
      </Item.Content>
    </Item>
  ),
};
