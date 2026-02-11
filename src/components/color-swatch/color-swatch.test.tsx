import { parseColor } from "@react-stately/color";
import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ColorSwatch } from "@/components/color-swatch/color-swatch";

afterEach(cleanup);

describe("ColorSwatch", () => {
  it("applies useColorSwatch semantics", () => {
    render(<ColorSwatch color="#0ea5e9" colorName="Sky" />);
    const swatch = screen.getByRole("img", { name: "Sky" });
    expect(swatch).toBeDefined();
    expect(swatch.getAttribute("aria-roledescription")).toBe("color swatch");
  });

  it("generates an accessible label when no label props are provided", () => {
    render(<ColorSwatch color="#4f46e5" />);
    const swatch = screen.getByRole("img");
    expect(swatch.getAttribute("aria-label")).not.toBeNull();
    expect(swatch.getAttribute("aria-label")).not.toBe("");
  });

  it("prefers explicit aria-label over colorName", () => {
    render(
      <ColorSwatch aria-label="Brand primary" color="#0ea5e9" colorName="Sky" />
    );
    expect(screen.getByRole("img", { name: "Brand primary" })).toBeDefined();
  });

  it("renders with color object input", () => {
    render(<ColorSwatch color={parseColor("hsl(200, 90%, 56%)")} />);
    expect(
      document.querySelector("[data-slot=color-swatch-fill]")
    ).toBeDefined();
  });

  it("supports visual background override for gradients", () => {
    render(
      <ColorSwatch
        background="linear-gradient(90deg, #ff0000 0%, #0000ff 100%)"
        color="#3b82f6"
        colorName="Gradient swatch"
      />
    );
    expect(screen.getByRole("img", { name: "Gradient swatch" })).toBeDefined();
    const fill = document.querySelector(
      "[data-slot=color-swatch-fill]"
    ) as HTMLSpanElement;
    expect(fill.style.background.includes("linear-gradient")).toBe(true);
  });

  it("sets alpha state transitions", () => {
    const { rerender } = render(<ColorSwatch color="rgba(0, 0, 0, 1)" />);
    let swatch = screen.getByRole("img");
    expect((swatch as HTMLElement).dataset.alphaState).toBe("opaque");

    rerender(<ColorSwatch color="rgba(0, 0, 0, 0.4)" />);
    swatch = screen.getByRole("img");
    expect((swatch as HTMLElement).dataset.alphaState).toBe("alpha");

    rerender(<ColorSwatch color="rgba(0, 0, 0, 0)" />);
    swatch = screen.getByRole("img");
    expect((swatch as HTMLElement).dataset.alphaState).toBe("transparent");
  });

  it("shows alpha background in auto mode for non-opaque colors", () => {
    const { rerender } = render(
      <ColorSwatch alphaBackground="auto" color="rgba(0, 0, 0, 0.4)" />
    );
    let swatch = screen.getByRole("img");
    expect(swatch.className.includes("color-swatch-alpha-bg")).toBe(true);

    rerender(<ColorSwatch alphaBackground="auto" color="rgba(0, 0, 0, 1)" />);
    swatch = screen.getByRole("img");
    expect(swatch.className.includes("color-swatch-alpha-bg")).toBe(false);

    rerender(<ColorSwatch alphaBackground="auto" color="rgba(0, 0, 0, 0)" />);
    swatch = screen.getByRole("img");
    expect(swatch.className.includes("color-swatch-alpha-bg")).toBe(true);
  });

  it("renders transparent slash only when fully transparent", () => {
    const { rerender } = render(<ColorSwatch color="rgba(0, 0, 0, 0)" />);
    expect(
      document.querySelector("[data-slot=color-swatch-slash]")
    ).toBeDefined();

    rerender(
      <ColorSwatch color="rgba(0, 0, 0, 0)" slashWhenTransparent={false} />
    );
    expect(document.querySelector("[data-slot=color-swatch-slash]")).toBeNull();
  });

  it("applies disabled aria and data attributes", () => {
    render(<ColorSwatch color="#22c55e" isDisabled />);
    const swatch = screen.getByRole("img");
    expect(swatch.getAttribute("aria-disabled")).toBe("true");
    expect((swatch as HTMLElement).dataset.disabled).toBe("true");
  });

  it("throws a migration hint for invalid color strings", () => {
    expect(() =>
      render(<ColorSwatch color="linear-gradient(90deg, #fff, #000)" />)
    ).toThrow(/use "background" for visual preview/i);
  });

  it("has data-slot markers and spreads rest props", () => {
    render(<ColorSwatch color="#f97316" data-testid="my-swatch" />);
    expect(document.querySelector("[data-slot=color-swatch]")).toBeDefined();
    expect(
      document.querySelector("[data-slot=color-swatch-fill]")
    ).toBeDefined();
    expect(screen.getByTestId("my-swatch")).toBeDefined();
  });
});
