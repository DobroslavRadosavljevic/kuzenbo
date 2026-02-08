import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerContentProps = ComponentProps<
  typeof BaseEmojiPicker.Viewport
>;

export const EmojiPickerContent = ({
  className,
  ...props
}: EmojiPickerContentProps) => (
  <BaseEmojiPicker.Viewport
    className={cn("relative flex-1 outline-hidden", className)}
    data-slot="emoji-picker-content"
    {...props}
  />
);
