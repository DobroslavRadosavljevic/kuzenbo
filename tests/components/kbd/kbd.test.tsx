import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Kbd } from "@/components/kbd/kbd";

afterEach(cleanup);

describe("Kbd", () => {
  it("renders children correctly", () => {
    render(<Kbd>⌘</Kbd>);
    expect(screen.getByText("⌘")).toBeDefined();
  });

  it("renders as kbd element", () => {
    render(<Kbd>K</Kbd>);
    const kbd = screen.getByText("K");
    expect(kbd.tagName).toBe("KBD");
  });

  it("has data-slot attribute", () => {
    render(<Kbd>K</Kbd>);
    expect(screen.getByText("K").dataset.slot).toBe("kbd");
  });
});
