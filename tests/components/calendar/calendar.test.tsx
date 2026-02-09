import { cleanup, render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { afterEach, describe, expect, it } from "bun:test";

import { Calendar } from "@/components/calendar/calendar";

afterEach(cleanup);

describe("Calendar", () => {
  it("renders calendar", () => {
    render(<Calendar />);
    expect(document.querySelector("[data-slot=calendar]")).toBeDefined();
  });

  it("renders grid cells", () => {
    render(<Calendar defaultMonth={new Date(2025, 0)} />);
    const cells = document.querySelectorAll('[role="gridcell"]');
    expect(cells.length).toBeGreaterThan(0);
  });

  it("selects day on click", async () => {
    const user = userEvent.setup();
    render(<Calendar defaultMonth={new Date(2025, 0)} mode="single" />);
    const day15 = screen.getByRole("button", {
      name: "Wednesday, January 15th, 2025",
    });
    await user.click(day15);
    const selected = document.querySelector('[data-selected-single="true"]');
    expect(selected).toBeDefined();
  });
});
