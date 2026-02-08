import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

const ContextMenuPortal = ({ ...props }: ContextMenuPrimitive.Portal.Props) => (
  <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
);

export { ContextMenuPortal };
