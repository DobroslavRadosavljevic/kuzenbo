import type { Meta, StoryObj } from "@storybook/react";

import { Tabs } from "./tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <Tabs.List>
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="overview">Overview panel content.</Tabs.Content>
      <Tabs.Content value="projects">Projects panel content.</Tabs.Content>
      <Tabs.Content value="account">Account panel content.</Tabs.Content>
    </Tabs>
  ),
};

export const Line: Story = {
  render: () => (
    <Tabs className="rounded-md border border-border" defaultValue="overview">
      <Tabs.List variant="line">
        <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
        <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="overview">Overview panel content.</Tabs.Content>
      <Tabs.Content value="projects">Projects panel content.</Tabs.Content>
      <Tabs.Content value="account">Account panel content.</Tabs.Content>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs className="flex-row gap-4" orientation="vertical">
      <Tabs.List>
        <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
        <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
      </Tabs.List>
      <div className="min-w-0 flex-1">
        <Tabs.Content value="tab1">Tab 1 content.</Tabs.Content>
        <Tabs.Content value="tab2">Tab 2 content.</Tabs.Content>
      </div>
    </Tabs>
  ),
};
