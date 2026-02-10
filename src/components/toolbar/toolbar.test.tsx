import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Toolbar } from "@/components/toolbar/toolbar";

afterEach(cleanup);

describe("Toolbar", () => {
  it("renders children", () => {
    render(
      <Toolbar>
        <Toolbar.Button>Bold</Toolbar.Button>
      </Toolbar>
    );
    expect(screen.getByText("Bold")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Toolbar>
        <Toolbar.Button>Test</Toolbar.Button>
      </Toolbar>
    );
    expect(document.querySelector("[data-slot=toolbar]")).toBeDefined();
  });
});
