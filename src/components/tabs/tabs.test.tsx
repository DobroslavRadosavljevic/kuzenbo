import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Tabs } from "@/components/tabs/tabs";

afterEach(cleanup);

describe("Tabs", () => {
  it("renders tabs", () => {
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
      </Tabs>
    );
    expect(screen.getByText("Tab 1")).toBeDefined();
    expect(screen.getByText("Content 1")).toBeDefined();
  });

  it("switches content on tab click", async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="tab1">
        <Tabs.List>
          <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
          <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">Content 1</Tabs.Content>
        <Tabs.Content value="tab2">Content 2</Tabs.Content>
      </Tabs>
    );
    await user.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Tabs>
        <Tabs.List>
          <Tabs.Trigger value="a">A</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="a">Content</Tabs.Content>
      </Tabs>
    );
    expect(document.querySelector("[data-slot=tabs]")).toBeDefined();
  });
});
