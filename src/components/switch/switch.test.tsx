import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Switch } from "@/components/switch/switch";

afterEach(cleanup);

describe("Switch", () => {
  it("renders as switch", () => {
    render(<Switch aria-label="Toggle" />);
    expect(screen.getByRole("switch")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Switch aria-label="Test" />);
    expect(document.querySelector("[data-slot=switch]")).toBeDefined();
  });

  it("toggles on click", async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Test" />);
    const sw = screen.getByRole("switch");
    expect(sw.getAttribute("aria-checked")).toBe("false");
    await user.click(sw);
    expect(sw.getAttribute("aria-checked")).toBe("true");
  });
});
