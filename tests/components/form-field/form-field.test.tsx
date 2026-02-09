import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { FormField } from "@/components/form-field/form-field";

afterEach(cleanup);

describe("FormField", () => {
  it("renders children", () => {
    render(
      <FormField>
        <FormField.Title>Email</FormField.Title>
      </FormField>
    );
    expect(screen.getByText("Email")).toBeDefined();
  });

  it("has data-slot and role group", () => {
    render(
      <FormField>
        <span>Content</span>
      </FormField>
    );
    const el = document.querySelector("[data-slot=field]");
    expect(el).toBeDefined();
    expect(el?.getAttribute("role")).toBe("group");
  });
});
