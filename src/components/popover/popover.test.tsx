import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Popover } from "@/components/popover/popover";

afterEach(cleanup);

describe("Popover", () => {
  it("renders trigger", () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <Popover.Title>Title</Popover.Title>
        </Popover.Content>
      </Popover>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
  });

  it("opens and shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>
          <Popover.Title>Popover Title</Popover.Title>
        </Popover.Content>
      </Popover>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Popover Title")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Popover>
        <Popover.Trigger>Open</Popover.Trigger>
        <Popover.Content>Content</Popover.Content>
      </Popover>
    );
    expect(document.querySelector("[data-slot=popover]")).toBeDefined();
  });
});
