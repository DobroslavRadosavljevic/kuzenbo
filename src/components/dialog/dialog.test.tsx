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
    expect(screen.getByRole("dialog")).toBeDefined();
    expect(screen.getByText("Test Dialog")).toBeDefined();
    expect(screen.getByText("Dialog content")).toBeDefined();
  });

  it("does not warn when description is omitted", async () => {
    const user = userEvent.setup();
    const consoleWarn = console.warn;
    const warnings: unknown[][] = [];

    console.warn = (...args: unknown[]) => {
      warnings.push(args);
    };

    try {
      render(
        <Dialog>
          <Dialog.Trigger>Open</Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Title>Title</Dialog.Title>
          </Dialog.Content>
        </Dialog>
      );

      await user.click(screen.getByRole("button", { name: "Open" }));

      const hasMissingDescriptionWarning = warnings.some((args) =>
        args.some((arg) => String(arg).includes("Missing `Description`"))
      );

      expect(hasMissingDescriptionWarning).toBe(false);
    } finally {
      console.warn = consoleWarn;
    }
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
