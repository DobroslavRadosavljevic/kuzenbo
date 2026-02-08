import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

import { EmojiPickerListCategoryHeader as CategoryHeader } from "./emoji-picker-list-category-header";
import { EmojiPickerListEmoji as Emoji } from "./emoji-picker-list-emoji";
import { EmojiPickerListRow as Row } from "./emoji-picker-list-row";

export type EmojiPickerListProps = ComponentProps<typeof BaseEmojiPicker.List>;

export const EmojiPickerList = ({
  className,
  ...props
}: EmojiPickerListProps) => (
  <BaseEmojiPicker.List
    className={cn("select-none pb-2", className)}
    components={{
      CategoryHeader,
      Row,
      Emoji,
    }}
    data-slot="emoji-picker-list"
    {...props}
  />
);
