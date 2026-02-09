import type { Meta, StoryObj } from "@storybook/react";

import { Timeline } from "./timeline";

const meta = {
  title: "Components/Timeline",
  component: Timeline,
  tags: ["autodocs"],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <Timeline.Item index={0}>
        <Timeline.Dot />
        <Timeline.Header>
          <Timeline.Title>Step 1</Timeline.Title>
          <Timeline.Time>2024-01-01</Timeline.Time>
        </Timeline.Header>
        <Timeline.Content>
          <Timeline.Description>First step description</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item index={1}>
        <Timeline.Dot />
        <Timeline.Header>
          <Timeline.Title>Step 2</Timeline.Title>
          <Timeline.Time>2024-02-01</Timeline.Time>
        </Timeline.Header>
        <Timeline.Content>
          <Timeline.Description>Second step description</Timeline.Description>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  ),
};
