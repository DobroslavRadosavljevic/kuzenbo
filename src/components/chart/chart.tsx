"use client";

import type { ComponentProps } from "react";

import { useId } from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "tailwind-variants";

import { kbStateTransitionClasses } from "@/lib/motion";

import type { ChartConfig } from "./chart-types";

import { ChartLegend } from "./chart-legend";
import { ChartLegendContent } from "./chart-legend-content";
import { ChartStyle } from "./chart-style";
import { ChartTooltip } from "./chart-tooltip";
import { ChartTooltipContent } from "./chart-tooltip-content";
import { ChartContext, useChart } from "./use-chart";

const ChartContainer = ({
  id,
  className,
  children,
  config,
  ...props
}: ComponentProps<"div"> & {
  config: ChartConfig;
  children: ComponentProps<typeof ResponsiveContainer>["children"];
}) => {
  const uniqueId = useId();
  const chartId = `chart-${id || uniqueId.replaceAll(":", "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-hidden [&_.recharts-surface]:outline-hidden",
          kbStateTransitionClasses,
          className
        )}
        data-chart={chartId}
        data-slot="chart"
        {...props}
      >
        <ChartStyle config={config} id={chartId} />
        <ResponsiveContainer>{children}</ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
};

ChartContainer.Legend = ChartLegend;
ChartContainer.LegendContent = ChartLegendContent;
ChartContainer.Style = ChartStyle;
ChartContainer.Tooltip = ChartTooltip;
ChartContainer.TooltipContent = ChartTooltipContent;

export type { ChartConfig } from "./chart-types";

export {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
  useChart,
};
