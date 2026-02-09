import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, mock } from "bun:test";

import { Input } from "@/components/input/input";

afterEach(cleanup);

describe("Input", () => {
  it("renders as an input element", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");
    expect(input.tagName).toBe("INPUT");
  });

  it("has the data-slot attribute", () => {
    render(<Input placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input.dataset.slot).toBe("input");
  });

  it("passes through value and onChange", async () => {
    const user = userEvent.setup();
    const handleChange = mock();
    render(<Input placeholder="Test" onChange={handleChange} />);
    const input = screen.getByPlaceholderText("Test");
    await user.type(input, "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("passes through disabled prop", () => {
    render(<Input placeholder="Test" disabled />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveProperty("disabled", true);
  });

  it("passes through aria-label", () => {
    render(<Input aria-label="Search" placeholder="" />);
    expect(screen.getByLabelText("Search")).toBeDefined();
  });

  it("spreads rest props onto the input element", () => {
    render(<Input placeholder="Test" data-testid="my-input" />);
    expect(screen.getByTestId("my-input")).toBeDefined();
  });
});
