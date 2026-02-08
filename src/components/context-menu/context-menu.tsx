import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

const ContextMenu = ({ ...props }: ContextMenuPrimitive.Root.Props) => (
  <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
);

export { ContextMenu };
export { ContextMenuCheckboxItem } from "./context-menu-checkbox-item";
export { ContextMenuContent } from "./context-menu-content";
export { ContextMenuGroup } from "./context-menu-group";
export { ContextMenuItem } from "./context-menu-item";
export { ContextMenuLabel } from "./context-menu-label";
export { ContextMenuPortal } from "./context-menu-portal";
export { ContextMenuRadioGroup } from "./context-menu-radio-group";
export { ContextMenuRadioItem } from "./context-menu-radio-item";
export { ContextMenuSeparator } from "./context-menu-separator";
export { ContextMenuShortcut } from "./context-menu-shortcut";
export { ContextMenuSub } from "./context-menu-sub";
export { ContextMenuSubContent } from "./context-menu-sub-content";
export { ContextMenuSubTrigger } from "./context-menu-sub-trigger";
export { ContextMenuTrigger } from "./context-menu-trigger";
