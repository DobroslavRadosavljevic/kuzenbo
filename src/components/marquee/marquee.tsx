"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

export type MarqueeProps = ComponentProps<"div">;

export const Marquee = ({ className, ...props }: MarqueeProps) => (
  <div
    className={cn("relative w-full overflow-hidden", className)}
    {...props}
  />
);

export { MarqueeContent, type MarqueeContentProps } from "./marquee-content";
export { MarqueeFade, type MarqueeFadeProps } from "./marquee-fade";
export { MarqueeItem, type MarqueeItemProps } from "./marquee-item";
