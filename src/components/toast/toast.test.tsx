import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { Toast } from "@/components/toast/toast";

afterEach(cleanup);

describe("Toast", () => {
  it("Toast.Provider renders children", () => {
    render(
      <Toast.Provider>
        <span>App content</span>
      </Toast.Provider>
    );
    expect(screen.getByText("App content")).toBeDefined();
  });

  it("has data-slot on provider", () => {
    render(
      <Toast.Provider>
        <span>x</span>
      </Toast.Provider>
    );
    expect(document.querySelector("[data-slot=toast]")).toBeDefined();
  });
});
