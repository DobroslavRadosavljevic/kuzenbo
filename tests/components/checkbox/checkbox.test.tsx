import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Checkbox } from "@/components/checkbox/checkbox";

afterEach(cleanup);

describe("Checkbox", () => {
  it("renders as checkbox", () => {
    render(<Checkbox aria-label="Accept" />);
    expect(screen.getByRole("checkbox")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Checkbox aria-label="Test" />);
    expect(document.querySelector("[data-slot=checkbox]")).toBeDefined();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Test" />);
    const cb = screen.getByRole("checkbox");
    expect(cb.getAttribute("aria-checked")).toBe("false");
    await user.click(cb);
    expect(cb.getAttribute("aria-checked")).toBe("true");
  });
});
