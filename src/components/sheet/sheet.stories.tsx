import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";

import { Sheet } from "./sheet";

const meta = {
  title: "Components/Sheet",
  component: Sheet,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Sheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Sheet>
      <Sheet.Trigger render={<Button variant="outline" />}>
        Open Sheet
      </Sheet.Trigger>
      <Sheet.Content>
        <Sheet.Header>
          <Sheet.Title>Sheet Title</Sheet.Title>
          <Sheet.Description>Sheet description goes here.</Sheet.Description>
        </Sheet.Header>
        <Sheet.Footer>
          <Button>Save</Button>
        </Sheet.Footer>
      </Sheet.Content>
    </Sheet>
  ),
};
