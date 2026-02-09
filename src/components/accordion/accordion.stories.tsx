import type { Meta, StoryObj } from "@storybook/react";

import { Accordion } from "./accordion";

const meta = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Accordion>
      <Accordion.Item value="1">
        <Accordion.Trigger>Item 1</Accordion.Trigger>
        <Accordion.Content>Content for item 1</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="2">
        <Accordion.Trigger>Item 2</Accordion.Trigger>
        <Accordion.Content>Content for item 2</Accordion.Content>
      </Accordion.Item>
    </Accordion>
  ),
};
