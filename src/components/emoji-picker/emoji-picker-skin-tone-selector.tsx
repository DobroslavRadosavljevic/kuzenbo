import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerSkinToneSelectorProps = ComponentProps<
  typeof BaseEmojiPicker.SkinToneSelector
>;

export const EmojiPickerSkinToneSelector = ({
  className,
  ...props
}: EmojiPickerSkinToneSelectorProps) => (
  <BaseEmojiPicker.SkinToneSelector
    className={cn(
      "mx-2 mb-1.5 size-8 rounded-md bg-popover text-lg hover:bg-accent",
      className
    )}
    data-slot="emoji-picker-skin-tone-selector"
    {...props}
  />
);
