import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { CountryFlag } from "@/components/country-flag/country-flag";

afterEach(cleanup);

describe("CountryFlag", () => {
  it("renders with valid country code", () => {
    const { container } = render(<CountryFlag code="US" />);
    expect(container.firstChild).toBeDefined();
  });

  it("applies title when provided", () => {
    render(<CountryFlag code="US" title="United States" />);
    expect(screen.getByTitle("United States")).toBeDefined();
  });

  it("renders with different size", () => {
    const { container } = render(<CountryFlag code="US" size="lg" />);
    expect(container.firstChild).toBeDefined();
  });
});
