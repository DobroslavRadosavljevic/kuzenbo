import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  subcomponents: {
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card className="w-[350px]" {...args}>
      <Card.Header>
        <Card.Title>Card Title</Card.Title>
        <Card.Description>Card description goes here.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content with some text inside.</p>
      </Card.Content>
      <Card.Footer>
        <Button variant="outline">Cancel</Button>
        <Button className="ml-auto">Submit</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Small: Story = {
  render: () => (
    <Card className="w-[300px]" size="sm">
      <Card.Header>
        <Card.Title>Compact Card</Card.Title>
        <Card.Description>Smaller padding variant.</Card.Description>
      </Card.Header>
      <Card.Content>
        <p>This card uses the small size variant.</p>
      </Card.Content>
    </Card>
  ),
};

export const WithForm: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Header>
        <Card.Title>Create Account</Card.Title>
        <Card.Description>Enter your details to get started.</Card.Description>
      </Card.Header>
      <Card.Content>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="card-name">Name</Label>
            <Input id="card-name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="card-email">Email</Label>
            <Input
              id="card-email"
              placeholder="john@example.com"
              type="email"
            />
          </div>
        </div>
      </Card.Content>
      <Card.Footer>
        <Button className="w-full">Create Account</Button>
      </Card.Footer>
    </Card>
  ),
};

export const ContentOnly: Story = {
  render: () => (
    <Card className="w-[350px]">
      <Card.Content>
        <p>A simple card with only content, no header or footer.</p>
      </Card.Content>
    </Card>
  ),
};
