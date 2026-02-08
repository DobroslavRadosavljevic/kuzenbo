import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

export type PillButtonProps = ComponentProps<typeof Button>;

export const PillButton = ({ className, ...props }: PillButtonProps) => (
  <Button
    className={cn(
      "-my-2 -mr-2 size-6 rounded-full p-0.5 hover:bg-foreground/5",
      className
    )}
    size="icon"
    variant="ghost"
    {...props}
  />
);
