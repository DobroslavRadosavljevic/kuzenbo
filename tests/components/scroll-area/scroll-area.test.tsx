import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { ScrollArea } from "@/components/scroll-area/scroll-area";

afterEach(cleanup);

describe("ScrollArea", () => {
  it("renders children", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>
    );
    expect(screen.getByText("Content")).toBeDefined();
  });

  it("has data-slot on viewport", () => {
    render(
      <ScrollArea>
        <div>x</div>
      </ScrollArea>
    );
    expect(document.querySelector("[data-slot=scroll-area]")).toBeDefined();
  });
});
