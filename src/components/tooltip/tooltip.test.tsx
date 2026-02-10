import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Tooltip } from "@/components/tooltip/tooltip";

afterEach(cleanup);

describe("Tooltip", () => {
  it("renders trigger", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Hover me</Tooltip.Trigger>
        <Tooltip.Content>Tooltip text</Tooltip.Content>
      </Tooltip>
    );
    expect(screen.getByText("Hover me")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Tooltip>
        <Tooltip.Trigger>Trigger</Tooltip.Trigger>
        <Tooltip.Content>Content</Tooltip.Content>
      </Tooltip>
    );
    expect(document.querySelector("[data-slot=tooltip]")).toBeDefined();
  });
});
