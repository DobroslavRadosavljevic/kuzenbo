import type { Meta, StoryObj } from "@storybook/react";

import { AspectRatio } from "./aspect-ratio";

const meta = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { ratio: 16 / 9 },
  render: (args) => (
    <AspectRatio {...args}>
      <img
        src="https://placehold.co/600x400"
        alt="Placeholder"
        className="size-full object-cover"
      />
    </AspectRatio>
  ),
};
