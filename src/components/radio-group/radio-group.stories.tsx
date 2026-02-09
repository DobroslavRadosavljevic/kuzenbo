import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "@/components/label/label";

import { RadioGroup } from "./radio-group";

const meta = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="a" />
        <Label>Option A</Label>
      </div>
      <div className="flex items-center gap-2">
        <RadioGroup.Item value="b" />
        <Label>Option B</Label>
      </div>
    </RadioGroup>
  ),
};
