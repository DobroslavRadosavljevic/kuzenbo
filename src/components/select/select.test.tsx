import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Select } from "@/components/select/select";

afterEach(cleanup);

describe("Select", () => {
  it("renders trigger with placeholder", () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Choose option" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Option A</Select.Item>
          <Select.Item value="b">Option B</Select.Item>
        </Select.Content>
      </Select>
    );
    expect(screen.getByText("Choose option")).toBeDefined();
  });

  it("opens and shows options on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Choose" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Option A</Select.Item>
          <Select.Item value="b">Option B</Select.Item>
        </Select.Content>
      </Select>
    );
    await user.click(screen.getByText("Choose"));
    expect(screen.getByText("Option A")).toBeDefined();
    expect(screen.getByText("Option B")).toBeDefined();
  });

  it("selects value on item click", async () => {
    const user = userEvent.setup();
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Choose" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">Option A</Select.Item>
          <Select.Item value="b">Option B</Select.Item>
        </Select.Content>
      </Select>
    );
    await user.click(screen.getByText("Choose"));
    await user.click(screen.getByText("Option A"));
    expect(screen.getByText("Option A")).toBeDefined();
  });

  it("has data-slot on trigger", () => {
    render(
      <Select>
        <Select.Trigger>
          <Select.Value placeholder="Choose" />
        </Select.Trigger>
        <Select.Content>
          <Select.Item value="a">A</Select.Item>
        </Select.Content>
      </Select>
    );
    const trigger = screen.getByRole("combobox");
    expect(trigger.closest("[data-slot=select-trigger]")).toBeDefined();
  });
});
