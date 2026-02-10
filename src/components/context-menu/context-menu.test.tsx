import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ContextMenu } from "@/components/context-menu/context-menu";

afterEach(cleanup);

describe("ContextMenu", () => {
  it("renders trigger area", () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right-click here</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Copy</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
    expect(screen.getByText("Right-click here")).toBeDefined();
  });

  it("opens on context menu", () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Right-click</ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item>Copy</ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
    fireEvent.contextMenu(screen.getByText("Right-click"));
    expect(screen.getByText("Copy")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <ContextMenu>
        <ContextMenu.Trigger>Area</ContextMenu.Trigger>
        <ContextMenu.Content>Content</ContextMenu.Content>
      </ContextMenu>
    );
    expect(document.querySelector("[data-slot=context-menu]")).toBeDefined();
  });
});
