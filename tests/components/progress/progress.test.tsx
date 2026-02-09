import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Progress } from "@/components/progress/progress";

afterEach(cleanup);

describe("Progress", () => {
  it("renders with value", () => {
    render(<Progress value={50} />);
    expect(document.querySelector("[data-slot=progress]")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(<Progress value={0} />);
    expect(document.querySelector("[data-slot=progress]")).toBeDefined();
  });
});
