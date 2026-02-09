import type { Meta } from "@storybook/react";

import { useCallback, useState } from "react";

import { Button } from "@/components/button/button";

import { Drawer } from "./drawer";

const DrawerDemo = () => {
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  return (
    <Drawer onOpenChange={setOpen} open={open}>
      <Drawer.Trigger>
        <Button variant="outline">Open Drawer</Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer Title</Drawer.Title>
            <Drawer.Description>
              Drawer description goes here.
            </Drawer.Description>
          </Drawer.Header>
          <Drawer.Footer>
            <Button onClick={handleClose}>Close</Button>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer>
  );
};

const meta = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Drawer>;

export default meta;

export const Default = {
  render: () => <DrawerDemo />,
};
