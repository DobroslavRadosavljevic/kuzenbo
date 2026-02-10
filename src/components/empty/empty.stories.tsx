import type { Meta, StoryObj } from "@storybook/react";

import {
  ArrowUpRight01Icon,
  CloudUploadIcon,
  FolderAddIcon,
  Notification03Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

import { Button } from "@/components/button/button";

import { Empty } from "./empty";

const meta = {
  title: "Components/Empty",
  component: Empty,
  tags: ["autodocs"],
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="icon">
          <HugeiconsIcon icon={FolderAddIcon} />
        </Empty.Media>
        <Empty.Title>No Projects Yet</Empty.Title>
        <Empty.Description>
          You haven&apos;t created any projects yet. Get started by creating
          your first project.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button>Create Project</Button>
          <Button variant="outline">Import Project</Button>
        </div>
        <a
          href="/docs/projects"
          className="text-muted-foreground text-xs hover:text-primary hover:underline"
        >
          Learn more about projects
        </a>
      </Empty.Content>
    </Empty>
  ),
};

export const Outline: Story = {
  render: () => (
    <Empty className="border border-dashed">
      <Empty.Header>
        <Empty.Media variant="icon">
          <HugeiconsIcon icon={CloudUploadIcon} />
        </Empty.Media>
        <Empty.Title>Cloud Storage Empty</Empty.Title>
        <Empty.Description>
          Upload files to your cloud storage to access them anywhere.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button>Upload Files</Button>
      </Empty.Content>
    </Empty>
  ),
};

export const WithBackground: Story = {
  render: () => (
    <Empty className="rounded-lg bg-muted/50">
      <Empty.Header>
        <Empty.Media variant="icon">
          <HugeiconsIcon icon={Notification03Icon} />
        </Empty.Media>
        <Empty.Title>No Notifications</Empty.Title>
        <Empty.Description>
          You&apos;re all caught up. New notifications will appear here.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button variant="outline">Refresh</Button>
      </Empty.Content>
    </Empty>
  ),
};

export const Minimal: Story = {
  render: () => (
    <Empty>
      <Empty.Header>
        <Empty.Title>No items</Empty.Title>
        <Empty.Description>
          Get started by creating a new item.
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button size="sm">Add Item</Button>
      </Empty.Content>
    </Empty>
  ),
};

export const WithLink: Story = {
  render: () => (
    <Empty>
      <Empty.Header>
        <Empty.Media variant="icon">
          <HugeiconsIcon icon={FolderAddIcon} />
        </Empty.Media>
        <Empty.Title>No data</Empty.Title>
        <Empty.Description>
          No data found.{" "}
          <a href="/docs" className="inline-flex items-center gap-1">
            Browse docs
            <HugeiconsIcon icon={ArrowUpRight01Icon} className="size-3" />
          </a>
        </Empty.Description>
      </Empty.Header>
      <Empty.Content>
        <Button>Add data</Button>
      </Empty.Content>
    </Empty>
  ),
};
