import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

export type ToolbarSeparatorProps = ToolbarPrimitive.Separator.Props;

const ToolbarSeparator = ({ className, ...props }: ToolbarSeparatorProps) => (
  <ToolbarPrimitive.Separator
    className={cn("h-6 w-px shrink-0 bg-border", className)}
    {...props}
  />
);

export { ToolbarSeparator };
