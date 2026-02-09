import type { Meta, StoryObj } from "@storybook/react";

import { Toolbar } from "./toolbar";

const meta = {
  title: "Components/Toolbar",
  component: Toolbar,
  tags: ["autodocs"],
} satisfies Meta<typeof Toolbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Toolbar>
      <Toolbar.Group>
        <Toolbar.Button>Bold</Toolbar.Button>
        <Toolbar.Button>Italic</Toolbar.Button>
        <Toolbar.Button>Underline</Toolbar.Button>
      </Toolbar.Group>
      <Toolbar.Separator />
      <Toolbar.Group>
        <Toolbar.Button>Align Left</Toolbar.Button>
        <Toolbar.Button>Align Center</Toolbar.Button>
        <Toolbar.Button>Align Right</Toolbar.Button>
      </Toolbar.Group>
    </Toolbar>
  ),
};
