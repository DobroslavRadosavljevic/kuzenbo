import type { Meta } from "@storybook/react";

import { Bar, BarChart, XAxis, YAxis } from "recharts";

import { ChartContainer } from "./chart";

const meta = {
  title: "Components/Chart",
  component: ChartContainer,
  tags: ["autodocs"],
} satisfies Meta<typeof ChartContainer>;

export default meta;

const data = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
  { name: "C", value: 15 },
];

export const Default = {
  render: () => (
    <ChartContainer
      config={{ value: { label: "Value", color: "hsl(var(--chart-1))" } }}
    >
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <ChartContainer.Tooltip content={<ChartContainer.TooltipContent />} />
        <Bar dataKey="value" fill="var(--color-value)" />
      </BarChart>
    </ChartContainer>
  ),
};
