import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Combobox } from "@/components/combobox/combobox";

const items = [
  { value: "a", label: "Option A" },
  { value: "b", label: "Option B" },
];

afterEach(cleanup);

describe("Combobox", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Combobox items={items}>
        <Combobox.Trigger>
          <Combobox.Value>Select</Combobox.Value>
        </Combobox.Trigger>
        <Combobox.Content>
          <Combobox.Collection>
            {(item) => (
              <Combobox.Item key={item.value} value={item}>
                {item.label}
              </Combobox.Item>
            )}
          </Combobox.Collection>
        </Combobox.Content>
      </Combobox>
    );
    expect(screen.getByText("Select")).toBeDefined();
  });

  it("opens content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Combobox items={items}>
        <Combobox.Trigger>
          <Combobox.Value>Choose</Combobox.Value>
        </Combobox.Trigger>
        <Combobox.Content>
          <Combobox.Collection>
            {(item) => (
              <Combobox.Item key={item.value} value={item}>
                {item.label}
              </Combobox.Item>
            )}
          </Combobox.Collection>
        </Combobox.Content>
      </Combobox>
    );
    await user.click(screen.getByRole("combobox"));
    const content = document.querySelector("[data-slot=combobox-content]");
    expect(content).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Combobox items={[]}>
        <Combobox.Trigger>
          <Combobox.Value>Test</Combobox.Value>
        </Combobox.Trigger>
        <Combobox.Content>
          <Combobox.Collection>{() => null}</Combobox.Collection>
        </Combobox.Content>
      </Combobox>
    );
    expect(document.querySelector("[data-slot=combobox]")).toBeDefined();
  });
});
