import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Meter } from "@/components/meter/meter";

afterEach(cleanup);

describe("Meter", () => {
  it("renders with value", () => {
    render(<Meter value={60} />);
    expect(document.querySelector("[data-slot=meter]")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(<Meter value={0} />);
    expect(document.querySelector("[data-slot=meter]")).toBeDefined();
  });
});
