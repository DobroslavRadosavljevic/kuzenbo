import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Spinner } from "@/components/spinner/spinner";

afterEach(cleanup);

describe("Spinner", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeDefined();
  });

  it("has accessible loading indication", () => {
    render(<Spinner />);
    expect(screen.getByLabelText("Loading")).toBeDefined();
  });

  it("spreads rest props", () => {
    render(<Spinner data-testid="my-spinner" />);
    expect(screen.getByTestId("my-spinner")).toBeDefined();
  });
});
