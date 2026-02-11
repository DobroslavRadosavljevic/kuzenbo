import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { AlertDialog } from "@/components/alert-dialog/alert-dialog";

afterEach(cleanup);

describe("AlertDialog", () => {
  it("renders trigger and opens on click", async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialog.Trigger>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Confirm</AlertDialog.Title>
          <AlertDialog.Description>Are you sure?</AlertDialog.Description>
        </AlertDialog.Content>
      </AlertDialog>
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeDefined();
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(await screen.findByRole("alertdialog")).toBeDefined();
    expect(await screen.findByText("Confirm")).toBeDefined();
    expect(await screen.findByText("Are you sure?")).toBeDefined();
  });

  it("has data-slot on content when open", async () => {
    const user = userEvent.setup();
    render(
      <AlertDialog>
        <AlertDialog.Trigger>Open</AlertDialog.Trigger>
        <AlertDialog.Content>
          <AlertDialog.Title>Title</AlertDialog.Title>
        </AlertDialog.Content>
      </AlertDialog>
    );
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(
      document.querySelector("[data-slot=alert-dialog-content]")
    ).toBeDefined();
  });
});
