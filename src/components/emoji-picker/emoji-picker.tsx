import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerProps = ComponentProps<typeof BaseEmojiPicker.Root>;

export const EmojiPicker = ({ className, ...props }: EmojiPickerProps) => (
  <BaseEmojiPicker.Root
    className={cn(
      "isolate flex h-80 w-fit flex-col rounded-md border bg-popover shadow-md",
      className
    )}
    data-slot="emoji-picker"
    {...props}
  />
);

export {
  EmojiPickerActiveEmoji,
  type EmojiPickerActiveEmojiProps,
} from "./emoji-picker-active-emoji";
export {
  EmojiPickerActiveEmojiPreview,
  type EmojiPickerActiveEmojiPreviewProps,
} from "./emoji-picker-active-emoji-preview";
export {
  EmojiPickerContent,
  type EmojiPickerContentProps,
} from "./emoji-picker-content";
export {
  EmojiPickerEmpty,
  type EmojiPickerEmptyProps,
} from "./emoji-picker-empty";
export {
  EmojiPickerList,
  type EmojiPickerListProps,
} from "./emoji-picker-list";
export {
  EmojiPickerLoading,
  type EmojiPickerLoadingProps,
} from "./emoji-picker-loading";
export {
  EmojiPickerSearch,
  type EmojiPickerSearchProps,
} from "./emoji-picker-search";
export {
  EmojiPickerSkinTone,
  type EmojiPickerSkinToneProps,
} from "./emoji-picker-skin-tone";
export {
  EmojiPickerSkinToneSelector,
  type EmojiPickerSkinToneSelectorProps,
} from "./emoji-picker-skin-tone-selector";
