import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

export type ToolbarGroupProps = ToolbarPrimitive.Group.Props;

const ToolbarGroup = ({ className, ...props }: ToolbarGroupProps) => (
  <ToolbarPrimitive.Group
    className={cn("flex items-center gap-1", className)}
    {...props}
  />
);

export { ToolbarGroup };
