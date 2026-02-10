import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Pill } from "@/components/pill/pill";

afterEach(cleanup);

describe("Pill", () => {
  it("renders children", () => {
    render(<Pill>Label</Pill>);
    expect(screen.getByText("Label")).toBeDefined();
  });

  it("has data-slot from Badge", () => {
    render(<Pill>Test</Pill>);
    expect(document.querySelector("[data-slot=badge]")).toBeDefined();
  });
});
