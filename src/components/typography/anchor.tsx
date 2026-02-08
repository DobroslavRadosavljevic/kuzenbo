"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { tv, type VariantProps } from "tailwind-variants";

const anchorVariants = tv({
  base: [
    "text-sm",
    "inline-flex",
    "items-center",
    "gap-1",
    "font-medium",
    "text-primary",
    "transition-colors",
    "duration-200",
    "hover:text-primary/90",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-ring",
    "focus-visible:ring-offset-2",
    "cursor-clickable",
    "disabled:cursor-not-allowed",
    "disabled:pointer-events-none",
    "disabled:opacity-50",
  ],
  variants: {
    underline: {
      always: "underline underline-offset-4",
      hover: "underline-offset-4 hover:underline",
      never: "no-underline",
    },
    variant: {
      default: "text-primary",
      muted: "text-muted-foreground hover:text-foreground",
      subtle: "text-foreground/70 hover:text-foreground",
    },
  },
  defaultVariants: {
    underline: "hover",
    variant: "default",
  },
});

type AnchorVariants = VariantProps<typeof anchorVariants>;

type AnchorProps = AnchorVariants &
  useRender.ComponentProps<"a"> & {
    "data-slot"?: string;
  };

const Anchor = ({
  className,
  underline,
  variant,
  render,
  ...props
}: AnchorProps) => {
  const element = useRender({
    defaultTagName: "a",
    render,
    props: mergeProps<"a">(
      {
        className: anchorVariants({ underline, variant, className }),
      },
      {
        "data-slot": "anchor",
        ...props,
      }
    ),
  });

  return element;
};

export { Anchor, anchorVariants };
export type { AnchorProps, AnchorVariants };
