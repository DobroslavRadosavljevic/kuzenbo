import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { RadioGroup } from "@/components/radio-group/radio-group";

afterEach(cleanup);

describe("RadioGroup", () => {
  it("renders radio items", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" aria-label="Option A" />
        <RadioGroup.Item value="b" aria-label="Option B" />
      </RadioGroup>
    );
    expect(screen.getByRole("radio", { name: "Option A" })).toBeDefined();
    expect(screen.getByRole("radio", { name: "Option B" })).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" aria-label="A" />
      </RadioGroup>
    );
    expect(document.querySelector("[data-slot=radio-group]")).toBeDefined();
  });

  it("selects item on click", async () => {
    const user = userEvent.setup();
    render(
      <RadioGroup>
        <RadioGroup.Item value="a" aria-label="A" />
        <RadioGroup.Item value="b" aria-label="B" />
      </RadioGroup>
    );
    await user.click(screen.getByRole("radio", { name: "B" }));
    expect(
      screen.getByRole("radio", { name: "B" }).getAttribute("aria-checked")
    ).toBe("true");
  });
});
