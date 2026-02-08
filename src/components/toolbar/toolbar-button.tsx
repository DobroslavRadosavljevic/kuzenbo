import type { VariantProps } from "tailwind-variants";

import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

import { buttonVariants } from "@/components/button/button";

export type ToolbarButtonProps = ToolbarPrimitive.Button.Props &
  VariantProps<typeof buttonVariants>;

export const ToolbarButton = ({
  className,
  variant = "ghost",
  size = "default",
  ...props
}: ToolbarButtonProps) => (
  <ToolbarPrimitive.Button
    className={cn(buttonVariants({ variant, size }), "shrink-0", className)}
    {...props}
  />
);
