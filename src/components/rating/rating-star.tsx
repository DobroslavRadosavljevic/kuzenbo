"use client";

import type { ComponentProps } from "react";

import { StarIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn, tv, type VariantProps } from "tailwind-variants";

export const ratingStarVariants = tv({
  base: [
    // Layout: relative container for star
    "relative inline-flex shrink-0",
    // Cursor: clickable when editable
    "cursor-pointer",
    // Transitions: smooth color transitions
    "transition-colors duration-150",
  ],
  variants: {
    size: {
      sm: [
        // Small size: smaller star
        "size-3.5",
      ],
      md: [
        // Medium size: default star
        "size-4",
      ],
      lg: [
        // Large size: larger star
        "size-5",
      ],
    },
    editable: {
      true: [
        // Hover: slight scale on hover when editable
        "hover:scale-110",
      ],
      false: [
        // Non-editable: no pointer cursor
        "cursor-default",
      ],
    },
  },
  defaultVariants: {
    size: "md",
    editable: false,
  },
});

export const ratingStarFilledVariants = tv({
  base: [
    // Layout: absolute positioned filled star
    "absolute inset-0",
    // Fill: yellow color for filled stars
    "fill-yellow-500 text-yellow-500",
  ],
  variants: {
    visible: {
      true: [
        // Visible: show filled star
        "opacity-100",
      ],
      false: [
        // Hidden: hide filled star
        "opacity-0",
      ],
    },
  },
  defaultVariants: {
    visible: true,
  },
});

export const ratingStarHalfVariants = tv({
  base: [
    // Layout: absolute positioned half-filled star
    "absolute inset-0 overflow-hidden",
    // Fill: yellow color for half-filled stars
    "fill-yellow-500 text-yellow-500",
  ],
  variants: {
    visible: {
      true: [
        // Visible: show half-filled star
        "opacity-100",
      ],
      false: [
        // Hidden: hide half-filled star
        "opacity-0",
      ],
    },
  },
  defaultVariants: {
    visible: true,
  },
});

export const ratingStarOutlineVariants = tv({
  base: [
    // Layout: relative positioned outline star
    "relative",
    // Color: muted color for outline
    "text-muted-foreground",
  ],
  variants: {
    active: {
      true: [
        // Active: slightly visible outline
        "opacity-30",
      ],
      false: [
        // Inactive: more visible outline
        "opacity-100",
      ],
    },
  },
  defaultVariants: {
    active: false,
  },
});

type RatingStarVariants = VariantProps<typeof ratingStarVariants>;

export type RatingStarProps = RatingStarVariants &
  ComponentProps<"button"> & {
    filled?: boolean;
    halfFilled?: boolean;
    active?: boolean;
    starClassName?: string;
  };

export const RatingStar = ({
  className,
  size,
  filled = false,
  halfFilled = false,
  active = false,
  editable = false,
  starClassName,
  onClick,
  ...props
}: RatingStarProps) => {
  const getStarSize = () => {
    if (size === "sm") {
      return 14;
    }
    if (size === "lg") {
      return 20;
    }
    return 16;
  };

  const getAriaLabel = () => {
    if (filled) {
      return "Filled star";
    }
    if (halfFilled) {
      return "Half-filled star";
    }
    return "Empty star";
  };

  const starSize = getStarSize();

  return (
    <button
      aria-label={getAriaLabel()}
      className={cn(ratingStarVariants({ size, editable }), className)}
      disabled={!editable}
      onClick={onClick}
      type="button"
      {...props}
    >
      {/* Filled star overlay */}
      <span
        className={cn(
          ratingStarFilledVariants({ visible: filled }),
          starClassName
        )}
      >
        <HugeiconsIcon
          className="fill-yellow-500 text-yellow-500"
          icon={StarIcon}
          size={starSize}
          strokeWidth={1.5}
        />
      </span>

      {/* Half-filled star overlay */}
      {halfFilled && (
        <span
          className={cn(
            ratingStarHalfVariants({ visible: true }),
            starClassName
          )}
        >
          <div className="w-1/2 overflow-hidden">
            <HugeiconsIcon
              className="fill-yellow-500 text-yellow-500"
              icon={StarIcon}
              size={starSize}
              strokeWidth={1.5}
            />
          </div>
        </span>
      )}

      {/* Outline star */}
      <span
        className={cn(ratingStarOutlineVariants({ active }), starClassName)}
      >
        <HugeiconsIcon icon={StarIcon} size={starSize} strokeWidth={1.5} />
      </span>
    </button>
  );
};
