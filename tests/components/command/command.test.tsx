import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Command } from "@/components/command/command";

afterEach(cleanup);

describe("Command", () => {
  it("renders input and items", () => {
    render(
      <Command>
        <Command.Input placeholder="Search" />
        <Command.List>
          <Command.Group>
            <Command.Item>Item 1</Command.Item>
            <Command.Item>Item 2</Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    );
    expect(screen.getByPlaceholderText("Search")).toBeDefined();
    expect(screen.getByText("Item 1")).toBeDefined();
    expect(screen.getByText("Item 2")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Command>
        <Command.List>
          <Command.Item>x</Command.Item>
        </Command.List>
      </Command>
    );
    expect(document.querySelector("[data-slot=command]")).toBeDefined();
  });

  it("filters items on input", async () => {
    const user = userEvent.setup();
    render(
      <Command>
        <Command.Input placeholder="Search" />
        <Command.List>
          <Command.Item>Apple</Command.Item>
          <Command.Item>Banana</Command.Item>
          <Command.Item>Cherry</Command.Item>
        </Command.List>
      </Command>
    );
    const input = screen.getByPlaceholderText("Search");
    await user.type(input, "ap");
    expect(screen.getByText("Apple")).toBeDefined();
  });
});
