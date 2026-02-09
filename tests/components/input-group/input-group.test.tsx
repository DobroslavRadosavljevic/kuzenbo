import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { InputGroup } from "@/components/input-group/input-group";

afterEach(cleanup);

describe("InputGroup", () => {
  it("renders children", () => {
    render(
      <InputGroup>
        <InputGroup.Input placeholder="Search" />
      </InputGroup>
    );
    expect(screen.getByPlaceholderText("Search")).toBeDefined();
  });

  it("has data-slot and role group", () => {
    render(
      <InputGroup>
        <InputGroup.Input placeholder="Test" />
      </InputGroup>
    );
    const el = document.querySelector("[data-slot=input-group]");
    expect(el).toBeDefined();
    expect(el?.getAttribute("role")).toBe("group");
  });
});
