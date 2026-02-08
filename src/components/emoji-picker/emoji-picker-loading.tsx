import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerLoadingProps = ComponentProps<
  typeof BaseEmojiPicker.Loading
>;

export const EmojiPickerLoading = ({
  className,
  ...props
}: EmojiPickerLoadingProps) => (
  <BaseEmojiPicker.Loading
    className={cn(
      "absolute inset-0 flex items-center justify-center text-muted-foreground text-sm",
      className
    )}
    data-slot="emoji-picker-loading"
    {...props}
  />
);
