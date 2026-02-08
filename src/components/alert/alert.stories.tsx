import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";

import { Alert, AlertAction, AlertDescription, AlertTitle } from "./alert";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  subcomponents: {
    AlertTitle,
    AlertDescription,
    AlertAction,
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "warning",
        "danger",
        "info",
        "success",
      ],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Heads up!</Alert.Title>
      <Alert.Description>
        You can add components to your app using the CLI.
      </Alert.Description>
    </Alert>
  ),
  args: { variant: "default" },
};

export const Destructive: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Error</Alert.Title>
      <Alert.Description>
        Your session has expired. Please log in again.
      </Alert.Description>
    </Alert>
  ),
  args: { variant: "destructive" },
};

export const Warning: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Warning</Alert.Title>
      <Alert.Description>
        Your trial is expiring soon. Upgrade to continue.
      </Alert.Description>
    </Alert>
  ),
  args: { variant: "warning" },
};

export const Success: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Success</Alert.Title>
      <Alert.Description>
        Your changes have been saved successfully.
      </Alert.Description>
    </Alert>
  ),
  args: { variant: "success" },
};

export const Info: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Note</Alert.Title>
      <Alert.Description>This feature is currently in beta.</Alert.Description>
    </Alert>
  ),
  args: { variant: "info" },
};

export const WithAction: Story = {
  render: (args) => (
    <Alert {...args}>
      <Alert.Title>Update available</Alert.Title>
      <Alert.Description>
        A new version is available. Update now to get the latest features.
      </Alert.Description>
      <Alert.Action>
        <Button size="xs" variant="outline">
          Update
        </Button>
      </Alert.Action>
    </Alert>
  ),
  args: { variant: "default" },
};
