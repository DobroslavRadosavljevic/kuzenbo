import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Avatar } from "@/components/avatar/avatar";

afterEach(cleanup);

describe("Avatar", () => {
  it("renders with fallback", () => {
    render(
      <Avatar>
        <Avatar.Fallback>AB</Avatar.Fallback>
      </Avatar>
    );
    expect(screen.getByText("AB")).toBeDefined();
  });

  it("has data-slot on root", () => {
    render(
      <Avatar>
        <Avatar.Fallback>X</Avatar.Fallback>
      </Avatar>
    );
    expect(document.querySelector("[data-slot=avatar]")).toBeDefined();
  });
});
