import type { Meta, StoryObj } from "@storybook/react";

import { parseColor } from "@react-stately/color";

import { ColorSwatch } from "./color-swatch";

const meta = {
  title: "Components/ColorSwatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          'Gradient migration: pass a semantic solid `color` and a visual `background` value.\n\nBefore: `color="linear-gradient(...)"`\nAfter: `color="#3b82f6" background="linear-gradient(...)"`',
      },
    },
  },
  args: {
    color: "#3b82f6",
    colorName: "Blue 500",
    shape: "square",
    size: "md",
    alphaBackground: "auto",
    slashWhenTransparent: true,
    withBorder: true,
    isDisabled: false,
  },
  argTypes: {
    color: {
      control: "text",
      table: { type: { summary: "string | Color" } },
    },
    background: { control: "text" },
    colorName: { control: "text" },
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
    shape: { control: "select", options: ["square", "circle"] },
    alphaBackground: {
      control: "select",
      options: ["auto", "always", "never"],
    },
    slashWhenTransparent: { control: "boolean" },
    withBorder: { control: "boolean" },
    isDisabled: { control: "boolean" },
  },
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultSemantic: Story = {};

export const ObjectColorInput: Story = {
  render: () => (
    <ColorSwatch
      color={parseColor("hsl(220, 88%, 62%)")}
      colorName="Object input"
      size="lg"
    />
  ),
};

export const ShapeVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#16a34a" colorName="Square" shape="square" />
      <ColorSwatch color="#16a34a" colorName="Circle" shape="circle" />
    </div>
  ),
};

export const SizeScale: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <ColorSwatch color="#ef4444" colorName="XS" size="xs" />
      <ColorSwatch color="#ef4444" colorName="SM" size="sm" />
      <ColorSwatch color="#ef4444" colorName="MD" size="md" />
      <ColorSwatch color="#ef4444" colorName="LG" size="lg" />
      <ColorSwatch color="#ef4444" colorName="XL" size="xl" />
    </div>
  ),
};

export const GradientBackground: Story = {
  args: {
    color: "#3b82f6",
    colorName: "Brand gradient",
    background:
      "linear-gradient(135deg, rgb(59 130 246) 0%, rgb(139 92 246) 50%, rgb(236 72 153) 100%)",
    size: "lg",
  },
};

export const AutoAlphaBackground: Story = {
  args: {
    color: "rgba(14, 165, 233, 0.4)",
    colorName: "Auto alpha",
    alphaBackground: "auto",
    size: "lg",
  },
};

export const TransparentSlash: Story = {
  args: {
    color: "rgba(14, 165, 233, 0)",
    colorName: "Transparent",
    alphaBackground: "auto",
    slashWhenTransparent: true,
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    color: "#0ea5e9",
    colorName: "Disabled sky",
    isDisabled: true,
  },
};
