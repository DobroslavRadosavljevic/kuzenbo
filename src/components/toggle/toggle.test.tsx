import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Toggle } from "@/components/toggle/toggle";

afterEach(cleanup);

describe("Toggle", () => {
  it("renders as button", () => {
    render(<Toggle aria-label="Toggle">Off</Toggle>);
    expect(screen.getByRole("button", { name: "Toggle" })).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Toggle aria-label="Test">T</Toggle>);
    expect(document.querySelector("[data-slot=toggle]")).toBeDefined();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Test">T</Toggle>);
    const btn = screen.getByRole("button");
    await user.click(btn);
    expect(btn.getAttribute("aria-pressed")).toBe("true");
  });
});
