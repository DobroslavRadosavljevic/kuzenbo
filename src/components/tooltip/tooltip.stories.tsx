import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";

import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  subcomponents: {
    TooltipTrigger,
    TooltipContent,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger render={<Button variant="outline" />}>
        Hover me
      </Tooltip.Trigger>
      <Tooltip.Content>This is a tooltip</Tooltip.Content>
    </Tooltip>
  ),
};

export const Sides: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip>
        <Tooltip.Trigger render={<Button variant="outline" />}>
          Top
        </Tooltip.Trigger>
        <Tooltip.Content side="top">Top tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger render={<Button variant="outline" />}>
          Bottom
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom">Bottom tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger render={<Button variant="outline" />}>
          Left
        </Tooltip.Trigger>
        <Tooltip.Content side="left">Left tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger render={<Button variant="outline" />}>
          Right
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Right tooltip</Tooltip.Content>
      </Tooltip>
    </div>
  ),
};
