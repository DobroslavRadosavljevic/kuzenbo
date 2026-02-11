import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Sheet } from "@/components/sheet/sheet";

afterEach(cleanup);

describe("Sheet", () => {
  it("renders trigger", () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Side panel</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
  });

  it("opens and shows content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>
          <Sheet.Title>Sheet Title</Sheet.Title>
        </Sheet.Content>
      </Sheet>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByText("Sheet Title")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Sheet>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content>Content</Sheet.Content>
      </Sheet>
    );
    expect(document.querySelector("[data-slot=sheet]")).toBeDefined();
  });
});
