import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

import { ToolbarButton } from "./toolbar-button";
import { ToolbarGroup } from "./toolbar-group";
import { ToolbarInput } from "./toolbar-input";
import { ToolbarLink } from "./toolbar-link";
import { ToolbarSeparator } from "./toolbar-separator";

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

Toolbar.Button = ToolbarButton;
Toolbar.Group = ToolbarGroup;
Toolbar.Input = ToolbarInput;
Toolbar.Link = ToolbarLink;
Toolbar.Separator = ToolbarSeparator;

export type { ToolbarButtonProps } from "./toolbar-button";
export type { ToolbarGroupProps } from "./toolbar-group";
export type { ToolbarInputProps } from "./toolbar-input";
export type { ToolbarLinkProps } from "./toolbar-link";
export type { ToolbarSeparatorProps } from "./toolbar-separator";

export {
  Toolbar,
  ToolbarButton,
  ToolbarGroup,
  ToolbarInput,
  ToolbarLink,
  ToolbarSeparator,
};
