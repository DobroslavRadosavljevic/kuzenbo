import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Alert } from "@/components/alert/alert";

afterEach(cleanup);

describe("Alert", () => {
  it("renders children correctly", () => {
    render(
      <Alert>
        <Alert.Title>Title</Alert.Title>
        <Alert.Description>Description</Alert.Description>
      </Alert>
    );
    expect(screen.getByText("Title")).toBeDefined();
    expect(screen.getByText("Description")).toBeDefined();
  });

  it("has role alert", () => {
    render(<Alert>Message</Alert>);
    expect(screen.getByRole("alert")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    render(<Alert>Test</Alert>);
    expect(document.querySelector("[data-slot=alert]")).toBeDefined();
  });
});
