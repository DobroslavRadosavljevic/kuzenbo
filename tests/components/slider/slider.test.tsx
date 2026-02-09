import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Slider } from "@/components/slider/slider";

afterEach(cleanup);

describe("Slider", () => {
  it("renders slider thumb", () => {
    render(<Slider aria-label="Volume" />);
    expect(document.querySelector("[data-slot=slider-thumb]")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Slider aria-label="Test" />);
    expect(document.querySelector("[data-slot=slider]")).toBeDefined();
  });

  it("spreads rest props", () => {
    render(<Slider aria-label="Test" data-testid="my-slider" />);
    expect(screen.getByTestId("my-slider")).toBeDefined();
  });
});
