import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cn, tv, type VariantProps } from "tailwind-variants";

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

export { ItemActions } from "./item-actions";
export { ItemContent } from "./item-content";
export { ItemDescription } from "./item-description";
export { ItemFooter } from "./item-footer";
export { ItemGroup } from "./item-group";
export { ItemHeader } from "./item-header";
export { ItemMedia } from "./item-media";
export { ItemSeparator } from "./item-separator";
export { ItemTitle } from "./item-title";
export { Item, itemVariants };
