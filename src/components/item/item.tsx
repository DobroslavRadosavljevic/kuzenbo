import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn, tv, type VariantProps } from "tailwind-variants";

import { ItemActions } from "./item-actions";
import { ItemContent } from "./item-content";
import { ItemDescription } from "./item-description";
import { ItemFooter } from "./item-footer";
import { ItemGroup } from "./item-group";
import { ItemHeader } from "./item-header";
import { ItemMedia } from "./item-media";
import { ItemSeparator } from "./item-separator";
import { ItemTitle } from "./item-title";

const itemVariants = tv({
  base: "group/item flex w-full flex-wrap items-center rounded-md border text-sm outline-none transition-colors duration-100 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 [a]:transition-colors [a]:hover:bg-muted",
  variants: {
    variant: {
      default: "border-transparent",
      outline: "border-border",
      muted: "border-transparent bg-muted/50",
    },
    size: {
      default: "gap-3.5 px-4 py-3.5",
      sm: "gap-2.5 px-3 py-2.5",
      xs: "gap-2 px-2.5 py-2 [[data-slot=dropdown-menu-content]_&]:p-0",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const Item = ({
  className,
  variant = "default",
  size = "default",
  render,
  ...props
}: useRender.ComponentProps<"div"> & VariantProps<typeof itemVariants>) =>
  useRender({
    defaultTagName: "div",
    props: mergeProps<"div">(
      {
        className: cn(itemVariants({ variant, size }), className),
      },
      props
    ),
    render,
    state: {
      slot: "item",
      variant,
      size,
    },
  });

Item.Actions = ItemActions;
Item.Content = ItemContent;
Item.Description = ItemDescription;
Item.Footer = ItemFooter;
Item.Group = ItemGroup;
Item.Header = ItemHeader;
Item.Media = ItemMedia;
Item.Separator = ItemSeparator;
Item.Title = ItemTitle;

export {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemGroup,
  ItemHeader,
  ItemMedia,
  ItemSeparator,
  ItemTitle,
  itemVariants,
};
