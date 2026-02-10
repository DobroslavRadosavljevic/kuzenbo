import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ToggleGroup } from "@/components/toggle-group/toggle-group";

afterEach(cleanup);

describe("ToggleGroup", () => {
  it("renders toggle items", () => {
    render(
      <ToggleGroup multiple={false}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
        <ToggleGroup.Item value="b">B</ToggleGroup.Item>
      </ToggleGroup>
    );
    expect(screen.getByText("A")).toBeDefined();
    expect(screen.getByText("B")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <ToggleGroup multiple={false}>
        <ToggleGroup.Item value="a">A</ToggleGroup.Item>
      </ToggleGroup>
    );
    expect(document.querySelector("[data-slot=toggle-group]")).toBeDefined();
  });
});
