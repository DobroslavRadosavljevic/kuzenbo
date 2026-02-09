"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { tv, type VariantProps } from "tailwind-variants";

export const themeIconVariants = tv({
  base: [
    // Layout: flex container with centered items
    "inline-flex shrink-0 items-center justify-center",
    // Styling: rounded corners, typography
    "rounded-md text-sm",
    // Focus: remove default outline, add transitions
    "outline-none transition-all",
    // SVG icons: default sizing and behavior
    "[&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  ],
  variants: {
    variant: {
      default: [
        // Background: primary color scheme with shadow
        "bg-primary text-primary-foreground shadow-xs",
      ],
      outline: [
        // Border: visible border with background
        "border bg-background shadow-xs",
        // Dark mode: adjusted border and background
        "dark:border-input dark:bg-input/30",
      ],
      secondary: [
        // Background: secondary color scheme with shadow
        "bg-secondary text-secondary-foreground shadow-xs",
      ],
      ghost: [
        // No additional styles for ghost variant
      ],
      link: [
        // Typography: primary text color
        "text-primary",
      ],
      warning: [
        // Border: warning border color
        "border-warning-border",
        // Background: warning color scheme with shadow
        "bg-warning text-warning-foreground shadow-xs",
      ],
      danger: [
        // Border: danger border color
        "border-danger-border",
        // Background: danger color scheme with shadow
        "bg-danger text-danger-foreground shadow-xs",
      ],
      info: [
        // Border: info border color
        "border-info-border",
        // Background: info color scheme with shadow
        "bg-info text-info-foreground shadow-xs",
      ],
      success: [
        // Border: success border color
        "border-success-border",
        // Background: success color scheme with shadow
        "bg-success text-success-foreground shadow-xs",
      ],
    },
    size: {
      default: [
        // Dimensions: standard square size
        "size-9",
      ],
      sm: [
        // Dimensions: small square size
        "size-8",
      ],
      lg: [
        // Dimensions: large square size
        "size-10",
      ],
      xl: [
        // Dimensions: extra large square size
        "size-12",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ThemeIconVariants = VariantProps<typeof themeIconVariants>;

export type ThemeIconProps = ThemeIconVariants &
  useRender.ComponentProps<"div"> & {
    "data-slot"?: string;
  };

export const ThemeIcon = ({
  className,
  variant,
  size,
  render,
  ...props
}: ThemeIconProps) => {
  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        className: themeIconVariants({ variant, size, className }),
      },
      {
        "data-slot": "theme-icon",
        ...props,
      }
    ),
  });

  return element;
};
