import type { Meta, StoryObj } from "@storybook/react";

import { Badge } from "@/components/badge/badge";

import { Marquee } from "./marquee";

const meta = {
  title: "Components/Marquee",
  component: Marquee,
  tags: ["autodocs"],
} satisfies Meta<typeof Marquee>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Marquee className="w-64 border">
      <Marquee.Content>
        <Marquee.Item>
          <Badge variant="secondary" className="mx-1">
            Item 1
          </Badge>
        </Marquee.Item>
        <Marquee.Item>
          <Badge variant="secondary" className="mx-1">
            Item 2
          </Badge>
        </Marquee.Item>
        <Marquee.Item>
          <Badge variant="secondary" className="mx-1">
            Item 3
          </Badge>
        </Marquee.Item>
      </Marquee.Content>
    </Marquee>
  ),
};
