import type { Meta, StoryObj } from "@storybook/react";

import { Collapsible } from "./collapsible";

const meta = {
  title: "Components/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
} satisfies Meta<typeof Collapsible>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Collapsible>
      <Collapsible.Trigger>Toggle</Collapsible.Trigger>
      <Collapsible.Content>
        <p className="pt-2 text-sm">Collapsible content</p>
      </Collapsible.Content>
    </Collapsible>
  ),
};
