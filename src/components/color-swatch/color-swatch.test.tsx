import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ColorSwatch } from "@/components/color-swatch/color-swatch";

afterEach(cleanup);

describe("ColorSwatch", () => {
  it("renders as img with accessible name from colorName", () => {
    render(<ColorSwatch color="#0ea5e9" colorName="Sky" />);
    expect(screen.getByRole("img", { name: "Sky" })).toBeDefined();
  });

  it("prefers explicit aria-label over colorName", () => {
    render(
      <ColorSwatch aria-label="Brand primary" color="#0ea5e9" colorName="Sky" />
    );
    expect(screen.getByRole("img", { name: "Brand primary" })).toBeDefined();
  });

  it("provides a fallback accessible name", () => {
    render(<ColorSwatch color="oklch(0.64 0.2 260)" />);
    expect(
      screen.getByRole("img", {
        name: "Color swatch: oklch(0.64 0.2 260)",
      })
    ).toBeDefined();
  });

  it("has data-slot markers on root and fill", () => {
    render(<ColorSwatch color="#f97316" />);
    expect(document.querySelector("[data-slot=color-swatch]")).toBeDefined();
    expect(
      document.querySelector("[data-slot=color-swatch-fill]")
    ).toBeDefined();
  });

  it("spreads rest props", () => {
    render(<ColorSwatch color="#f97316" data-testid="my-swatch" />);
    expect(screen.getByTestId("my-swatch")).toBeDefined();
  });

  it("applies background style for solid colors", () => {
    render(<ColorSwatch color="#ff0000" />);
    const fill = document.querySelector(
      "[data-slot=color-swatch-fill]"
    ) as HTMLSpanElement;
    expect(fill.style.background.length > 0).toBe(true);
  });

  it("applies background style for gradients", () => {
    render(
      <ColorSwatch color="linear-gradient(90deg, #ff0000 0%, #0000ff 100%)" />
    );
    const fill = document.querySelector(
      "[data-slot=color-swatch-fill]"
    ) as HTMLSpanElement;
    expect(fill.style.background.includes("linear-gradient")).toBe(true);
  });

  it("adds alpha background class only when enabled", () => {
    const { rerender } = render(<ColorSwatch color="#ffffff80" />);
    let swatch = screen.getByRole("img");
    expect(swatch.className.includes("color-swatch-alpha-bg")).toBe(false);

    rerender(<ColorSwatch color="#ffffff80" showAlphaBackground />);
    swatch = screen.getByRole("img");
    expect(swatch.className.includes("color-swatch-alpha-bg")).toBe(true);
  });

  it("applies aria-disabled when disabled", () => {
    render(<ColorSwatch color="#22c55e" isDisabled />);
    const swatch = screen.getByRole("img");
    expect(swatch.getAttribute("aria-disabled")).toBe("true");
  });
});
