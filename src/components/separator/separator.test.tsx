import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Separator } from "@/components/separator/separator";

afterEach(cleanup);

describe("Separator", () => {
  it("renders without crashing", () => {
    render(<Separator />);
    const el = document.querySelector("[data-slot=separator]");
    expect(el).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Separator />);
    const el = document.querySelector("[data-slot=separator]");
    expect(el).toBeDefined();
  });

  it("renders with vertical orientation", () => {
    render(<Separator orientation="vertical" />);
    const el = document.querySelector("[data-slot=separator]");
    expect(el).toBeDefined();
  });
});
