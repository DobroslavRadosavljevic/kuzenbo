import type { Meta, StoryObj } from "@storybook/react";

import { HoverCard } from "./hover-card";

const meta = {
  title: "Components/HoverCard",
  component: HoverCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof HoverCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <HoverCard>
      <HoverCard.Trigger>Hover me</HoverCard.Trigger>
      <HoverCard.Content>
        <p className="text-sm">Hover card content appears here.</p>
      </HoverCard.Content>
    </HoverCard>
  ),
};
