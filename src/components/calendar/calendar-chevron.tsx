"use client";

import type { ComponentProps } from "react";
import type { Chevron } from "react-day-picker";

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

type CalendarChevronProps = ComponentProps<typeof Chevron>;

const CalendarChevron = ({
  className,
  orientation,
  ...props
}: CalendarChevronProps) => {
  if (orientation === "left") {
    return (
      <HugeiconsIcon
        className={cn("size-4", className)}
        icon={ArrowLeftIcon}
        strokeWidth={2}
        {...props}
      />
    );
  }

  if (orientation === "right") {
    return (
      <HugeiconsIcon
        className={cn("size-4", className)}
        icon={ArrowRightIcon}
        strokeWidth={2}
        {...props}
      />
    );
  }

  return (
    <HugeiconsIcon
      className={cn("size-4", className)}
      icon={ArrowDownIcon}
      strokeWidth={2}
      {...props}
    />
  );
};

export { CalendarChevron };
