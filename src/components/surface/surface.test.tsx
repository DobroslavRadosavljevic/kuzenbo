import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Surface } from "@/components/surface/surface";

afterEach(cleanup);

describe("Surface", () => {
  it("renders children correctly", () => {
    render(<Surface>Content</Surface>);
    expect(screen.getByText("Content")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Surface>Test</Surface>);
    const el = document.querySelector("[data-slot=surface]");
    expect(el).toBeDefined();
  });

  it("spreads rest props", () => {
    render(<Surface data-testid="my-surface">Test</Surface>);
    expect(screen.getByTestId("my-surface")).toBeDefined();
  });
});
