import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ButtonGroup } from "@/components/button-group/button-group";
import { Button } from "@/components/button/button";

afterEach(cleanup);

describe("ButtonGroup", () => {
  it("renders buttons", () => {
    render(
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
    expect(screen.getByText("Left")).toBeDefined();
    expect(screen.getByText("Right")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <ButtonGroup>
        <Button>Test</Button>
      </ButtonGroup>
    );
    expect(document.querySelector("[data-slot=button-group]")).toBeDefined();
  });
});
