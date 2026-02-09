import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

import { ChartContainer } from "@/components/chart/chart";

afterEach(cleanup);

describe("ChartContainer", () => {
  it("renders with minimal config", () => {
    const config = { value: {} };
    const { container } = render(
      <ChartContainer config={config}>
        <BarChart data={[{ x: "a", value: 1 }]}>
          <XAxis dataKey="x" />
          <YAxis />
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.querySelector("[data-slot=chart]")).toBeDefined();
  });

  it("has data-slot attribute", () => {
    const config = { value: {} };
    const { container } = render(
      <ChartContainer config={config}>
        <BarChart data={[]}>
          <XAxis dataKey="x" />
          <YAxis />
          <Bar dataKey="value" />
        </BarChart>
      </ChartContainer>
    );
    expect(container.querySelector("[data-slot=chart]")).toBeDefined();
  });
});
