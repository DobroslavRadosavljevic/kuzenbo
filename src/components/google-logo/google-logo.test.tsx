import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { GoogleLogo } from "@/components/google-logo/google-logo";

afterEach(cleanup);

describe("GoogleLogo", () => {
  it("renders svg", () => {
    render(<GoogleLogo />);
    const svg = document.querySelector("svg");
    expect(svg).toBeDefined();
  });

  it("has accessible title", () => {
    render(<GoogleLogo />);
    expect(screen.getByTitle("Google logo")).toBeDefined();
  });

  it("respects size prop", () => {
    render(<GoogleLogo size={32} />);
    const svg = document.querySelector("svg");
    expect(svg?.getAttribute("width")).toBe("32");
  });
});
