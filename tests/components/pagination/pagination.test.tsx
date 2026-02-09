import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Pagination } from "@/components/pagination/pagination";

afterEach(cleanup);

describe("Pagination", () => {
  it("renders with content", () => {
    render(
      <Pagination>
        <Pagination.Content>
          <Pagination.Item>
            <Pagination.Previous href="#" />
          </Pagination.Item>
        </Pagination.Content>
      </Pagination>
    );
    expect(document.querySelector("[data-slot=pagination]")).toBeDefined();
  });

  it("has aria-label pagination", () => {
    render(
      <Pagination>
        <Pagination.Content />
      </Pagination>
    );
    expect(
      screen.getByRole("navigation", { name: "pagination" })
    ).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Pagination>Content</Pagination>);
    expect(document.querySelector("[data-slot=pagination]")).toBeDefined();
  });
});
