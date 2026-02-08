import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

const ContextMenuGroup = ({ ...props }: ContextMenuPrimitive.Group.Props) => (
  <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
);

export { ContextMenuGroup };
