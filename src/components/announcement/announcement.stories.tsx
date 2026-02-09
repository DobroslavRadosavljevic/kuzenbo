import type { Meta, StoryObj } from "@storybook/react";

import { Announcement } from "./announcement";

const meta = {
  title: "Components/Announcement",
  component: Announcement,
  tags: ["autodocs"],
} satisfies Meta<typeof Announcement>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Announcement>
      <Announcement.Tag>New</Announcement.Tag>
      <Announcement.Title>Feature announcement</Announcement.Title>
    </Announcement>
  ),
};
