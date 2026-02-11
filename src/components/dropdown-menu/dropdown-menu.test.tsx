import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu";

afterEach(cleanup);

describe("DropdownMenu", () => {
  it("renders trigger", () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item 1</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
  });

  it("opens and shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Menu Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Menu Item")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <DropdownMenu>
        <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>
        <DropdownMenu.Content>Content</DropdownMenu.Content>
      </DropdownMenu>
    );
    expect(document.querySelector("[data-slot=dropdown-menu]")).toBeDefined();
  });
});
