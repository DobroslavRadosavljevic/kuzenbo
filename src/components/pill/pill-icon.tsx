import type { ComponentProps } from "react";

import { HugeiconsIcon, type HugeiconsProps } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type PillIconProps = {
  icon: NonNullable<HugeiconsProps["icon"]>;
  className?: string;
} & ComponentProps<typeof HugeiconsIcon>;

export const PillIcon = ({ icon, className, ...props }: PillIconProps) => (
  <HugeiconsIcon
    className={cn("size-3 text-muted-foreground", className)}
    icon={icon}
    size={12}
    {...props}
  />
);
