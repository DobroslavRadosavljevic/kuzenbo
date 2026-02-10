import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Empty } from "@/components/empty/empty";

afterEach(cleanup);

describe("Empty", () => {
  it("renders children", () => {
    render(
      <Empty>
        <Empty.Title>No data</Empty.Title>
      </Empty>
    );
    expect(screen.getByText("No data")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Empty>Content</Empty>);
    expect(document.querySelector("[data-slot=empty]")).toBeDefined();
  });
});
