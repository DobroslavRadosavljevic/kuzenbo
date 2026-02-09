import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { CheckboxGroup } from "@/components/checkbox-group/checkbox-group";

afterEach(cleanup);

describe("CheckboxGroup", () => {
  it("renders children", () => {
    render(
      <CheckboxGroup>
        <label>
          <input type="checkbox" />
          Option A
        </label>
      </CheckboxGroup>
    );
    expect(screen.getByText("Option A")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <CheckboxGroup>
        <input type="checkbox" />
      </CheckboxGroup>
    );
    expect(document.querySelector("[data-slot=checkbox-group]")).toBeDefined();
  });
});
