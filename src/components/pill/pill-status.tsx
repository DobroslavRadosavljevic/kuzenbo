import type { ComponentProps, ReactNode } from "react";

import { cn } from "tailwind-variants";

export type PillStatusProps = {
  children: ReactNode;
  className?: string;
} & ComponentProps<"div">;

export const PillStatus = ({
  children,
  className,
  ...props
}: PillStatusProps) => (
  <div
    className={cn(
      "flex items-center gap-2 border-r pr-2 font-medium",
      className
    )}
    {...props}
  >
    {children}
  </div>
);
