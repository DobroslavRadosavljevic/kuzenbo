import type { Meta, StoryObj } from "@storybook/react";

import { ColorSwatch } from "./color-swatch";

const meta = {
  title: "Components/ColorSwatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  args: {
    color: "oklch(0.64 0.2 260)",
    colorName: "Violet",
  },
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
    withBorder: { control: "boolean" },
    showAlphaBackground: { control: "boolean" },
    isDisabled: { control: "boolean" },
    color: { control: "text" },
    colorName: { control: "text" },
  },
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#16a34a" colorName="Green sm" size="sm" />
      <ColorSwatch color="#16a34a" colorName="Green md" size="md" />
      <ColorSwatch color="#16a34a" colorName="Green lg" size="lg" />
    </div>
  ),
};

export const RadiusVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#ef4444" colorName="Red none" radius="none" />
      <ColorSwatch color="#ef4444" colorName="Red sm" radius="sm" />
      <ColorSwatch color="#ef4444" colorName="Red md" radius="md" />
      <ColorSwatch color="#ef4444" colorName="Red lg" radius="lg" />
      <ColorSwatch color="#ef4444" colorName="Red full" radius="full" />
    </div>
  ),
};

export const Gradient: Story = {
  args: {
    color: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)",
    colorName: "Gradient",
    size: "lg",
  },
};

export const WithAlphaBackground: Story = {
  args: {
    color:
      "linear-gradient(135deg, rgb(59 130 246 / 1), rgb(59 130 246 / 0.2))",
    colorName: "Alpha blue gradient",
    showAlphaBackground: true,
    size: "lg",
    radius: "md",
  },
};

export const Disabled: Story = {
  args: {
    color: "#0ea5e9",
    colorName: "Disabled sky",
    isDisabled: true,
  },
};
