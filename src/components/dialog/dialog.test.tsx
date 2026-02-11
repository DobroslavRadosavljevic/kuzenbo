import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Dialog } from "@/components/dialog/dialog";

afterEach(cleanup);

describe("Dialog", () => {
  it("renders trigger and opens on click", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Test Dialog</Dialog.Title>
          <Dialog.Description>Dialog content</Dialog.Description>
        </Dialog.Content>
      </Dialog>
    );

    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByRole("dialog")).toBeDefined();
    expect(await screen.findByText("Test Dialog")).toBeDefined();
    expect(await screen.findByText("Dialog content")).toBeDefined();
  });

  it("has data-slot on dialog root when open", async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <Dialog.Trigger>Open</Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Title>Title</Dialog.Title>
        </Dialog.Content>
      </Dialog>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    const dialog = screen.getByRole("dialog");
    expect(dialog.closest("[data-slot=dialog-content]")).toBeDefined();
  });
});
