import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";

import { Popover } from "./popover";

const meta = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger render={<Button variant="outline" />}>
        Open
      </Popover.Trigger>
      <Popover.Content>
        <Popover.Header>
          <Popover.Title>Popover Title</Popover.Title>
        </Popover.Header>
        <p className="text-sm text-muted-foreground">Popover content here.</p>
      </Popover.Content>
    </Popover>
  ),
};
