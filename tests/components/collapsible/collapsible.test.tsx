import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Collapsible } from "@/components/collapsible/collapsible";

afterEach(cleanup);

describe("Collapsible", () => {
  it("renders trigger", () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </Collapsible>
    );
    expect(screen.getByText("Toggle")).toBeDefined();
  });

  it("expands content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Hidden content</Collapsible.Content>
      </Collapsible>
    );
    await user.click(screen.getByText("Toggle"));
    expect(screen.getByText("Hidden content")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Collapsible>
        <Collapsible.Trigger>Toggle</Collapsible.Trigger>
        <Collapsible.Content>Content</Collapsible.Content>
      </Collapsible>
    );
    expect(document.querySelector("[data-slot=collapsible]")).toBeDefined();
  });
});
