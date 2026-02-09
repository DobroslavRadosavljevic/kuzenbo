import type { Meta, StoryObj } from "@storybook/react";

import { Checkbox } from "@/components/checkbox/checkbox";
import { Label } from "@/components/label/label";

import { CheckboxGroup } from "./checkbox-group";

const meta = {
  title: "Components/CheckboxGroup",
  component: CheckboxGroup,
  tags: ["autodocs"],
} satisfies Meta<typeof CheckboxGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup>
      <Label data-slot="label" className="flex items-center gap-2">
        <Checkbox defaultChecked />
        Accept terms
      </Label>
      <Label data-slot="label" className="flex items-center gap-2">
        <Checkbox />
        Subscribe to newsletter
      </Label>
    </CheckboxGroup>
  ),
};
