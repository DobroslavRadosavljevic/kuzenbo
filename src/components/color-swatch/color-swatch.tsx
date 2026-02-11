"use client";

import type { Color } from "@react-types/color";
import type { CSSProperties } from "react";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { useColorSwatch } from "@react-aria/color";
import { parseColor } from "@react-stately/color";
import { cn, tv, type VariantProps } from "tailwind-variants";

export type ColorSwatchShape = "square" | "circle";
export type ColorSwatchSize = "xs" | "sm" | "md" | "lg" | "xl";
export type ColorSwatchAlphaBackground = "auto" | "always" | "never";
export type ColorSwatchAlphaState = "opaque" | "alpha" | "transparent";

export const colorSwatchVariants = tv({
  base: "relative isolate inline-flex shrink-0 overflow-hidden align-middle",
  variants: {
    size: {
      xs: "size-3",
      sm: "size-4",
      md: "size-5",
      lg: "size-6",
      xl: "size-8",
    },
    shape: {
      square: "rounded-md",
      circle: "rounded-full",
    },
    withBorder: {
      true: "border border-border",
      false: "border border-transparent",
    },
    isDisabled: {
      true: "opacity-50 saturate-0",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    shape: "square",
    withBorder: true,
    isDisabled: false,
  },
});

type ColorSwatchVariants = VariantProps<typeof colorSwatchVariants>;

export type ColorSwatchProps = ColorSwatchVariants &
  Omit<useRender.ComponentProps<"span">, "color"> & {
    color: string | Color;
    background?: string;
    colorName?: string;
    alphaBackground?: ColorSwatchAlphaBackground;
    slashWhenTransparent?: boolean;
    shape?: ColorSwatchShape;
    size?: ColorSwatchSize;
    "data-alpha-state"?: ColorSwatchAlphaState;
    "data-disabled"?: "true" | "false";
    "data-shape"?: ColorSwatchShape;
    "data-slot"?: string;
  };

const alphaBackgroundClasses = [
  "color-swatch-alpha-bg",
  "[--color-swatch-checker:color-mix(in_oklab,var(--border)_70%,transparent)]",
  "bg-[repeating-conic-gradient(var(--color-swatch-checker)_0%_25%,transparent_0%_50%)]",
  "[background-size:8px_8px]",
] as const;

const resolveSemanticColor = (value: string | Color): Color => {
  if (typeof value !== "string") {
    return value;
  }

  try {
    return parseColor(value);
  } catch {
    throw new Error(
      `ColorSwatch: "color" must be a parseable solid color. Received "${value}". For gradients or patterns, pass a solid semantic "color" and use "background" for visual preview.`
    );
  }
};

const getAlphaState = (color: Color): ColorSwatchAlphaState => {
  const alpha = color.getChannelValue("alpha");

  if (alpha <= 0) {
    return "transparent";
  }
  if (alpha >= 1) {
    return "opaque";
  }
  return "alpha";
};

const resolveAlphaBackground = (
  alphaBackground: ColorSwatchAlphaBackground | undefined
): ColorSwatchAlphaBackground => alphaBackground ?? "auto";

const shouldShowAlphaBackground = (
  policy: ColorSwatchAlphaBackground,
  alphaState: ColorSwatchAlphaState
) => {
  if (policy === "always") {
    return true;
  }
  if (policy === "never") {
    return false;
  }
  return alphaState !== "opaque";
};

const ColorSwatch = ({
  className,
  color,
  background,
  colorName,
  alphaBackground,
  slashWhenTransparent = true,
  shape = "square",
  size = "md",
  withBorder = true,
  isDisabled = false,
  render,
  children,
  style,
  ...props
}: ColorSwatchProps) => {
  const semanticColor = resolveSemanticColor(color);
  const { colorSwatchProps, color: parsedColor } = useColorSwatch({
    color: semanticColor,
    colorName,
    id: props.id,
    "aria-label": props["aria-label"],
    "aria-labelledby": props["aria-labelledby"],
    "aria-describedby": props["aria-describedby"],
  });
  const alphaState = getAlphaState(parsedColor);
  const resolvedAlphaBackground = resolveAlphaBackground(alphaBackground);
  const hasAlphaBackground = shouldShowAlphaBackground(
    resolvedAlphaBackground,
    alphaState
  );
  const visualBackground = background ?? parsedColor.toString("css");
  const showTransparencySlash =
    slashWhenTransparent && alphaState === "transparent";
  const mergedStyle: CSSProperties = {
    ...(colorSwatchProps.style as CSSProperties | undefined),
    ...style,
  };

  const fillStyle: CSSProperties = {
    background: visualBackground,
  };
  const dataAttributes = {
    "data-alpha-state": alphaState,
    "data-disabled": isDisabled ? "true" : "false",
    "data-shape": shape,
  } as const;

  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: cn(
          colorSwatchVariants({
            size,
            shape,
            withBorder,
            isDisabled,
          }),
          hasAlphaBackground && alphaBackgroundClasses,
          className
        ),
        "aria-disabled": isDisabled || undefined,
        style: mergedStyle,
        children: (
          <>
            <span
              aria-hidden="true"
              className="absolute inset-0"
              data-slot="color-swatch-fill"
              style={fillStyle}
            />
            {showTransparencySlash && (
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,transparent_47%,color-mix(in_oklab,var(--foreground)_65%,transparent)_50%,transparent_53%)]"
                data-slot="color-swatch-slash"
              />
            )}
            {children}
          </>
        ),
      },
      {
        ...colorSwatchProps,
        ...dataAttributes,
        "data-slot": "color-swatch",
        ...props,
      }
    ),
    state: {
      alphaState,
      disabled: isDisabled,
      shape,
      slot: "color-swatch",
    },
  });
};

export { ColorSwatch };
