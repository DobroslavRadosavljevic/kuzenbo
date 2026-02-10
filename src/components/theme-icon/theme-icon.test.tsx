import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ThemeIcon } from "@/components/theme-icon/theme-icon";

afterEach(cleanup);

describe("ThemeIcon", () => {
  it("renders children", () => {
    render(<ThemeIcon>★</ThemeIcon>);
    expect(screen.getByText("★")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(<ThemeIcon>x</ThemeIcon>);
    expect(document.querySelector("[data-slot=theme-icon]")).toBeDefined();
  });
});
