import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Badge } from "@/components/badge/badge";

afterEach(cleanup);

describe("Badge", () => {
  it("renders children correctly", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Badge>Test</Badge>);
    const el = document.querySelector("[data-slot=badge]");
    expect(el).toBeDefined();
  });

  it("spreads rest props", () => {
    render(<Badge data-testid="my-badge">Test</Badge>);
    expect(screen.getByTestId("my-badge")).toBeDefined();
  });
});
