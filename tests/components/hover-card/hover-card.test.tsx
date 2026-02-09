import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { HoverCard } from "@/components/hover-card/hover-card";

afterEach(cleanup);

describe("HoverCard", () => {
  it("renders trigger", () => {
    render(
      <HoverCard>
        <HoverCard.Trigger>Hover me</HoverCard.Trigger>
        <HoverCard.Content>Card content</HoverCard.Content>
      </HoverCard>
    );
    expect(screen.getByText("Hover me")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <HoverCard>
        <HoverCard.Trigger>Trigger</HoverCard.Trigger>
        <HoverCard.Content>Content</HoverCard.Content>
      </HoverCard>
    );
    expect(document.querySelector("[data-slot=hover-card]")).toBeDefined();
  });
});
