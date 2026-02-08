import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "@/components/button/button";
import { Input } from "@/components/input/input";
import { Label } from "@/components/label/label";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./dialog";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  tags: ["autodocs"],
  subcomponents: {
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger render={<Button variant="outline" />}>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Edit Profile</Dialog.Title>
          <Dialog.Description>
            Make changes to your profile here. Click save when you&apos;re done.
          </Dialog.Description>
        </Dialog.Header>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input defaultValue="John Doe" id="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input defaultValue="john@example.com" id="email" type="email" />
          </div>
        </div>
        <Dialog.Footer>
          <Button>Save changes</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const WithCloseFooter: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger render={<Button variant="outline" />}>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Header>
          <Dialog.Title>Confirm Action</Dialog.Title>
          <Dialog.Description>
            Are you sure you want to proceed? This action cannot be undone.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer showCloseButton>
          <Button variant="destructive">Confirm</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger render={<Button variant="outline" />}>
        Open Dialog
      </Dialog.Trigger>
      <Dialog.Content showCloseButton={false}>
        <Dialog.Header>
          <Dialog.Title>Simple Dialog</Dialog.Title>
          <Dialog.Description>
            This dialog has no close button in the corner.
          </Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer showCloseButton>
          <Button>OK</Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog>
  ),
};
