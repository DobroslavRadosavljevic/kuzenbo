import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Drawer } from "@/components/drawer/drawer";

const noop = (_open: boolean): void => (_open ? undefined : undefined);

afterEach(cleanup);

describe("Drawer", () => {
  it("renders trigger", () => {
    render(
      <Drawer onOpenChange={noop}>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Title>Drawer</Drawer.Title>
        </Drawer.Content>
      </Drawer>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
  });

  it("opens on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Drawer onOpenChange={noop}>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content>
          <Drawer.Title>Drawer Title</Drawer.Title>
        </Drawer.Content>
      </Drawer>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(screen.getByText("Drawer Title")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Drawer onOpenChange={noop}>
        <Drawer.Trigger>Open</Drawer.Trigger>
        <Drawer.Content>Content</Drawer.Content>
      </Drawer>
    );
    expect(document.querySelector("[data-slot=drawer]")).toBeDefined();
  });
});
