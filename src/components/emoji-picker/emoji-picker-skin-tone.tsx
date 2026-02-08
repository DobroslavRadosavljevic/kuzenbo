import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";

export type EmojiPickerSkinToneProps = ComponentProps<
  typeof BaseEmojiPicker.SkinTone
>;

export const EmojiPickerSkinTone = (props: EmojiPickerSkinToneProps) => (
  <BaseEmojiPicker.SkinTone data-slot="emoji-picker-skin-tone" {...props} />
);
