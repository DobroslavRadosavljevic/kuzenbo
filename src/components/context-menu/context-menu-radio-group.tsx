import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

const ContextMenuRadioGroup = ({
  ...props
}: ContextMenuPrimitive.RadioGroup.Props) => (
  <ContextMenuPrimitive.RadioGroup
    data-slot="context-menu-radio-group"
    {...props}
  />
);

export { ContextMenuRadioGroup };
