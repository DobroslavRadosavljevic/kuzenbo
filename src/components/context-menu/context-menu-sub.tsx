import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

const ContextMenuSub = ({
  ...props
}: ContextMenuPrimitive.SubmenuRoot.Props) => (
  <ContextMenuPrimitive.SubmenuRoot data-slot="context-menu-sub" {...props} />
);

export { ContextMenuSub };
