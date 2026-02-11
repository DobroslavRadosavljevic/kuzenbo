"use client";

import type { CSSProperties } from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn, tv, type VariantProps } from "tailwind-variants";

export const colorSwatchVariants = tv({
  base: "relative inline-flex shrink-0 overflow-hidden align-middle",
  variants: {
    size: {
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-[4px]",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
    withBorder: {
      true: "border border-border",
      false: "border border-transparent",
    },
    showAlphaBackground: {
      true: [
        "color-swatch-alpha-bg",
        "[--color-swatch-checker:color-mix(in_oklab,var(--border)_70%,transparent)]",
        "bg-[repeating-conic-gradient(var(--color-swatch-checker)_0%_25%,transparent_0%_50%)]",
        "[background-size:8px_8px]",
      ],
      false: "bg-transparent",
    },
    isDisabled: {
      true: "opacity-50 saturate-0",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    radius: "full",
    withBorder: true,
    showAlphaBackground: false,
    isDisabled: false,
  },
});

type ColorSwatchVariants = VariantProps<typeof colorSwatchVariants>;

export type ColorSwatchProps = ColorSwatchVariants &
  useRender.ComponentProps<"span"> & {
    color: string;
    colorName?: string;
    "data-slot"?: string;
  };

const ColorSwatch = ({
  className,
  color,
  colorName,
  size = "md",
  radius = "full",
  withBorder = true,
  showAlphaBackground = false,
  isDisabled = false,
  render,
  children,
  style,
  role: _role,
  ...props
}: ColorSwatchProps) => {
  const ariaLabel =
    props["aria-label"] ?? colorName ?? `Color swatch: ${color}`;

  const fillStyle: CSSProperties = {
    background: color,
  };

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: cn(
          colorSwatchVariants({
            size,
            radius,
            withBorder,
            showAlphaBackground,
            isDisabled,
          }),
          className
        ),
        role: "img",
        "aria-label": ariaLabel,
        "aria-disabled": isDisabled || undefined,
        style,
        children: (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0"
              data-slot="color-swatch-fill"
              style={fillStyle}
            />
            {children}
          </>
        ),
      },
      {
        "data-slot": "color-swatch",
        ...props,
      }
    ),
  });
};

export { ColorSwatch };
