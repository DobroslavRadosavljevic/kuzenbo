"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

type TextProps = ComponentProps<"span">;

const Text = ({ className, ...props }: TextProps) => (
  <span
    className={cn("inline-block text-sm", className)}
    data-slot="typography-text"
    {...props}
  />
);

export { Text };
export type { TextProps };
