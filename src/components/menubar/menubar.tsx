import { Menubar as MenubarPrimitive } from "@base-ui/react/menubar";
import { cn } from "tailwind-variants";

import { MenubarCheckboxItem } from "./menubar-checkbox-item";
import { MenubarContent } from "./menubar-content";
import { MenubarGroup } from "./menubar-group";
import { MenubarItem } from "./menubar-item";
import { MenubarLabel } from "./menubar-label";
import { MenubarMenu } from "./menubar-menu";
import { MenubarPortal } from "./menubar-portal";
import { MenubarRadioGroup } from "./menubar-radio-group";
import { MenubarRadioItem } from "./menubar-radio-item";
import { MenubarSeparator } from "./menubar-separator";
import { MenubarShortcut } from "./menubar-shortcut";
import { MenubarSub } from "./menubar-sub";
import { MenubarSubContent } from "./menubar-sub-content";
import { MenubarSubTrigger } from "./menubar-sub-trigger";
import { MenubarTrigger } from "./menubar-trigger";

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

Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.Content = MenubarContent;
Menubar.Group = MenubarGroup;
Menubar.Item = MenubarItem;
Menubar.Label = MenubarLabel;
Menubar.Menu = MenubarMenu;
Menubar.Portal = MenubarPortal;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Separator = MenubarSeparator;
Menubar.Shortcut = MenubarShortcut;
Menubar.Sub = MenubarSub;
Menubar.SubContent = MenubarSubContent;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.Trigger = MenubarTrigger;

export {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarPortal,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
};
