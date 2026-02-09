import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, mock } from "bun:test";

import { Button } from "@/components/button/button";

afterEach(cleanup);

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeDefined();
  });

  it("renders as a button element", () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole("button");
    expect(button.tagName).toBe("BUTTON");
  });

  it("calls onClick when clicked", async () => {
    const user = userEvent.setup();
    const handleClick = mock();
    render(<Button onClick={handleClick}>Click</Button>);
    await user.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("has the data-slot attribute", () => {
    render(<Button>Slotted</Button>);
    const button = screen.getByRole("button");
    expect(button.dataset.slot).toBe("button");
  });

  it("passes through the disabled prop", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveProperty("disabled", true);
  });

  it("passes through aria-label", () => {
    render(<Button aria-label="Close dialog">X</Button>);
    expect(screen.getByLabelText("Close dialog")).toBeDefined();
  });

  it("spreads rest props onto the button element", () => {
    render(<Button data-testid="my-button">Test</Button>);
    expect(screen.getByTestId("my-button")).toBeDefined();
  });
});
