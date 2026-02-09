import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Autocomplete } from "@/components/autocomplete/autocomplete";

const items = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

afterEach(cleanup);

describe("Autocomplete", () => {
  it("renders trigger", () => {
    render(
      <Autocomplete items={items}>
        <Autocomplete.Trigger>
          <Autocomplete.Value>Search</Autocomplete.Value>
        </Autocomplete.Trigger>
        <Autocomplete.Content>
          <Autocomplete.Collection>
            {(item) => (
              <Autocomplete.Item key={item.value} value={item}>
                {item.label}
              </Autocomplete.Item>
            )}
          </Autocomplete.Collection>
        </Autocomplete.Content>
      </Autocomplete>
    );
    expect(screen.getByRole("combobox")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Autocomplete items={[]}>
        <Autocomplete.Trigger>
          <Autocomplete.Value>Test</Autocomplete.Value>
        </Autocomplete.Trigger>
        <Autocomplete.Content>
          <Autocomplete.Collection>{() => null}</Autocomplete.Collection>
        </Autocomplete.Content>
      </Autocomplete>
    );
    expect(document.querySelector("[data-slot=autocomplete]")).toBeDefined();
  });
});
