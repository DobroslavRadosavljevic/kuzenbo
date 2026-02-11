import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Menubar } from "@/components/menubar/menubar";

afterEach(cleanup);

describe("Menubar", () => {
  it("renders menu triggers", () => {
    render(
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
    expect(screen.getByRole("menuitem", { name: "File" })).toBeDefined();
  });

  it("opens menu on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item>New</Menubar.Item>
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
    await user.click(screen.getByRole("menuitem", { name: "File" }));
    expect(await screen.findByText("New")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Menubar>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>Content</Menubar.Content>
        </Menubar.Menu>
      </Menubar>
    );
    expect(document.querySelector("[data-slot=menubar]")).toBeDefined();
  });
});
