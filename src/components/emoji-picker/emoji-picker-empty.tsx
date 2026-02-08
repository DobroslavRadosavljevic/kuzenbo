import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerEmptyProps = ComponentProps<
  typeof BaseEmojiPicker.Empty
>;

export const EmojiPickerEmpty = ({
  className,
  ...props
}: EmojiPickerEmptyProps) => (
  <BaseEmojiPicker.Empty
    className={cn(
      "absolute inset-0 flex items-center justify-center text-muted-foreground text-sm",
      className
    )}
    data-slot="emoji-picker-empty"
    {...props}
  />
);
