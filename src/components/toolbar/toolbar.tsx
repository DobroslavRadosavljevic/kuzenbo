import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

export type ToolbarProps = ToolbarPrimitive.Root.Props;

const Toolbar = ({ className, ...props }: ToolbarProps) => (
  <ToolbarPrimitive.Root
    className={cn(
      "flex items-center gap-1 rounded-lg bg-popover p-1 shadow-xs outline outline-border",
      className
    )}
    data-slot="toolbar"
    {...props}
  />
);

export { ToolbarButton, type ToolbarButtonProps } from "./toolbar-button";
export { ToolbarGroup, type ToolbarGroupProps } from "./toolbar-group";
export { ToolbarInput, type ToolbarInputProps } from "./toolbar-input";
export { ToolbarLink, type ToolbarLinkProps } from "./toolbar-link";
export {
  ToolbarSeparator,
  type ToolbarSeparatorProps,
} from "./toolbar-separator";
export { Toolbar };
