import { ContextMenu as ContextMenuPrimitive } from "@base-ui/react/context-menu";

import { ContextMenuCheckboxItem } from "./context-menu-checkbox-item";
import { ContextMenuContent } from "./context-menu-content";
import { ContextMenuGroup } from "./context-menu-group";
import { ContextMenuItem } from "./context-menu-item";
import { ContextMenuLabel } from "./context-menu-label";
import { ContextMenuPortal } from "./context-menu-portal";
import { ContextMenuRadioGroup } from "./context-menu-radio-group";
import { ContextMenuRadioItem } from "./context-menu-radio-item";
import { ContextMenuSeparator } from "./context-menu-separator";
import { ContextMenuShortcut } from "./context-menu-shortcut";
import { ContextMenuSub } from "./context-menu-sub";
import { ContextMenuSubContent } from "./context-menu-sub-content";
import { ContextMenuSubTrigger } from "./context-menu-sub-trigger";
import { ContextMenuTrigger } from "./context-menu-trigger";

const ContextMenu = ({ ...props }: ContextMenuPrimitive.Root.Props) => (
  <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
);

ContextMenu.CheckboxItem = ContextMenuCheckboxItem;
ContextMenu.Content = ContextMenuContent;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Item = ContextMenuItem;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Portal = ContextMenuPortal;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Separator = ContextMenuSeparator;
ContextMenu.Shortcut = ContextMenuShortcut;
ContextMenu.Sub = ContextMenuSub;
ContextMenu.SubContent = ContextMenuSubContent;
ContextMenu.SubTrigger = ContextMenuSubTrigger;
ContextMenu.Trigger = ContextMenuTrigger;

export {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuPortal,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
};
