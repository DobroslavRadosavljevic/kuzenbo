import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { cn } from "tailwind-variants";

const Menubar = ({ className, ...props }: MenubarPrimitive.Props) => (
  <MenubarPrimitive
    className={cn(
      "flex h-9 items-center gap-1 rounded-md border bg-background p-1",
      className
    )}
    data-slot="menubar"
    {...props}
  />
);

export { MenubarCheckboxItem } from "./menubar-checkbox-item";
export { MenubarContent } from "./menubar-content";
export { MenubarGroup } from "./menubar-group";
export { MenubarItem } from "./menubar-item";
export { MenubarLabel } from "./menubar-label";
export { MenubarMenu } from "./menubar-menu";
export { MenubarPortal } from "./menubar-portal";
export { MenubarRadioGroup } from "./menubar-radio-group";
export { MenubarRadioItem } from "./menubar-radio-item";
export { MenubarSeparator } from "./menubar-separator";
export { MenubarShortcut } from "./menubar-shortcut";
export { MenubarSub } from "./menubar-sub";
export { MenubarSubContent } from "./menubar-sub-content";
export { MenubarSubTrigger } from "./menubar-sub-trigger";
export { MenubarTrigger } from "./menubar-trigger";
export { Menubar };
