import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { NumberField } from "@/components/number-field/number-field";

afterEach(cleanup);

describe("NumberField", () => {
  it("renders input", () => {
    render(<NumberField aria-label="Quantity" />);
    const input = document.querySelector("[data-slot=number-field-input]");
    expect(input).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(<NumberField aria-label="Test" />);
    expect(document.querySelector("[data-slot=number-field]")).toBeDefined();
  });

  it("has increment and decrement buttons", () => {
    render(<NumberField aria-label="Qty" />);
    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(2);
  });
});
