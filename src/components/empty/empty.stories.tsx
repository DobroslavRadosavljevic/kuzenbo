import type { Meta, StoryObj } from "@storybook/react";

import { Empty } from "./empty";

const meta = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <Empty.Header>
        <Empty.Title>No items</Empty.Title>
        <Empty.Description>
          Get started by creating a new item.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>Content area</Empty.Content>
    </Empty>
  ),
};
