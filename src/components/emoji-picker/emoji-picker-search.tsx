import type { ComponentProps } from "react";

import { EmojiPicker as BaseEmojiPicker } from "frimousse";
import { cn } from "tailwind-variants";

export type EmojiPickerSearchProps = ComponentProps<
  typeof BaseEmojiPicker.Search
> & {
  wrapperClassName?: string;
};

export const EmojiPickerSearch = ({
  className,
  wrapperClassName,
  ...props
}: EmojiPickerSearchProps) => (
  <div
    className={cn("p-2", wrapperClassName)}
    data-slot="emoji-picker-search-wrapper"
  >
    <BaseEmojiPicker.Search
      className={cn(
        "z-50 flex h-9 w-full min-w-0 rounded-md border bg-input px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow,border-color] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground hover:border-ring/70 disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/50",
        className
      )}
      {...props}
    />
  </div>
);
