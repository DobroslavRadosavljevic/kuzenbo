import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";

import { ButtonGroup } from "./button-group";

const meta = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <ButtonGroup>
      <Button variant="outline">Button A</Button>
      <Button variant="outline">Button B</Button>
    </ButtonGroup>
  ),
};
