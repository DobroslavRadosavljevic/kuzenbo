import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Accordion } from "@/components/accordion/accordion";

afterEach(cleanup);

describe("Accordion", () => {
  it("renders trigger", () => {
    render(
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(screen.getByText("Section 1")).toBeDefined();
  });

  it("expands content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    await user.click(screen.getByText("Section 1"));
    expect(screen.getByText("Content 1")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Accordion>
        <Accordion.Item value="1">
          <Accordion.Trigger>Section 1</Accordion.Trigger>
          <Accordion.Content>Content 1</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
    expect(document.querySelector("[data-slot=accordion]")).toBeDefined();
  });
});
