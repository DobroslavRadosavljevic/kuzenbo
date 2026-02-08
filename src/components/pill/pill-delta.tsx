import {
  ArrowDown01Icon,
  ArrowUp01Icon,
  MinusSignIcon,
} from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export interface PillDeltaProps {
  className?: string;
  delta: number;
}

export const PillDelta = ({ className, delta }: PillDeltaProps) => {
  if (!delta) {
    return (
      <HugeiconsIcon
        className={cn("size-3 text-muted-foreground", className)}
        icon={MinusSignIcon}
      />
    );
  }

  if (delta > 0) {
    return (
      <HugeiconsIcon
        className={cn("size-3 text-emerald-500", className)}
        icon={ArrowUp01Icon}
      />
    );
  }

  return (
    <HugeiconsIcon
      className={cn("size-3 text-rose-500", className)}
      icon={ArrowDown01Icon}
    />
  );
};
