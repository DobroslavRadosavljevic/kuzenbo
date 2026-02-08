import type { ComponentProps } from "react";

export type EmojiPickerListCategoryHeaderProps = {
  category: { label: string };
} & ComponentProps<"div">;

export const EmojiPickerListCategoryHeader = ({
  category,
  ...restProps
}: EmojiPickerListCategoryHeaderProps) => (
  <div
    className="bg-popover px-3 pb-1.5 font-medium text-muted-foreground text-xs"
    data-slot="emoji-picker-list-category-header"
    {...restProps}
  >
    {category.label}
  </div>
);
