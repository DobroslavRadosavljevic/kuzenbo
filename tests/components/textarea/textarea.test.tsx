import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it, mock } from "bun:test";

import { Textarea } from "@/components/textarea/textarea";

afterEach(cleanup);

describe("Textarea", () => {
  it("renders as textarea element", () => {
    render(<Textarea placeholder="Enter text" />);
    const textarea = screen.getByPlaceholderText("Enter text");
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("has data-slot attribute", () => {
    render(<Textarea placeholder="Test" />);
    const textarea = screen.getByPlaceholderText("Test");
    expect(textarea.dataset.slot).toBe("textarea");
  });

  it("passes through value and onChange", async () => {
    const user = userEvent.setup();
    const handleChange = mock();
    render(<Textarea placeholder="Test" onChange={handleChange} />);
    const textarea = screen.getByPlaceholderText("Test");
    await user.type(textarea, "a");
    expect(handleChange).toHaveBeenCalled();
  });

  it("spreads rest props", () => {
    render(<Textarea placeholder="Test" data-testid="my-textarea" />);
    expect(screen.getByTestId("my-textarea")).toBeDefined();
  });
});
