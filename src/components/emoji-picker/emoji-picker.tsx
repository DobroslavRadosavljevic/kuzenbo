import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

import { EmojiPickerActiveEmoji } from "./emoji-picker-active-emoji";
import { EmojiPickerActiveEmojiPreview } from "./emoji-picker-active-emoji-preview";
import { EmojiPickerContent } from "./emoji-picker-content";
import { EmojiPickerEmpty } from "./emoji-picker-empty";
import { EmojiPickerList } from "./emoji-picker-list";
import { EmojiPickerLoading } from "./emoji-picker-loading";
import { EmojiPickerSearch } from "./emoji-picker-search";
import { EmojiPickerSkinTone } from "./emoji-picker-skin-tone";
import { EmojiPickerSkinToneSelector } from "./emoji-picker-skin-tone-selector";

export type EmojiPickerProps = ComponentProps<typeof BaseEmojiPicker.Root>;

const EmojiPicker = ({ className, ...props }: EmojiPickerProps) => (
  <BaseEmojiPicker.Root
    className={cn(
      "isolate flex h-80 w-fit flex-col rounded-md border bg-popover shadow-md",
      className
    )}
    data-slot="emoji-picker"
    {...props}
  />
);

EmojiPicker.ActiveEmoji = EmojiPickerActiveEmoji;
EmojiPicker.ActiveEmojiPreview = EmojiPickerActiveEmojiPreview;
EmojiPicker.Content = EmojiPickerContent;
EmojiPicker.Empty = EmojiPickerEmpty;
EmojiPicker.List = EmojiPickerList;
EmojiPicker.Loading = EmojiPickerLoading;
EmojiPicker.Search = EmojiPickerSearch;
EmojiPicker.SkinTone = EmojiPickerSkinTone;
EmojiPicker.SkinToneSelector = EmojiPickerSkinToneSelector;

export type { EmojiPickerActiveEmojiProps } from "./emoji-picker-active-emoji";
export type { EmojiPickerActiveEmojiPreviewProps } from "./emoji-picker-active-emoji-preview";
export type { EmojiPickerContentProps } from "./emoji-picker-content";
export type { EmojiPickerEmptyProps } from "./emoji-picker-empty";
export type { EmojiPickerListProps } from "./emoji-picker-list";
export type { EmojiPickerLoadingProps } from "./emoji-picker-loading";
export type { EmojiPickerSearchProps } from "./emoji-picker-search";
export type { EmojiPickerSkinToneProps } from "./emoji-picker-skin-tone";
export type { EmojiPickerSkinToneSelectorProps } from "./emoji-picker-skin-tone-selector";

export {
  EmojiPicker,
  EmojiPickerActiveEmoji,
  EmojiPickerActiveEmojiPreview,
  EmojiPickerContent,
  EmojiPickerEmpty,
  EmojiPickerList,
  EmojiPickerLoading,
  EmojiPickerSearch,
  EmojiPickerSkinTone,
  EmojiPickerSkinToneSelector,
};
