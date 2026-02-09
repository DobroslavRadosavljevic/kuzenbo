import type { Meta, StoryObj } from "@storybook/react";

import { Carousel } from "./carousel";

const meta = {
  title: "Components/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Carousel className="w-64">
      <Carousel.Content>
        <Carousel.Item>
          <div className="flex aspect-square items-center justify-center rounded-md bg-muted">
            Slide 1
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex aspect-square items-center justify-center rounded-md bg-muted">
            Slide 2
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex aspect-square items-center justify-center rounded-md bg-muted">
            Slide 3
          </div>
        </Carousel.Item>
      </Carousel.Content>
      <Carousel.Previous />
      <Carousel.Next />
    </Carousel>
  ),
};
