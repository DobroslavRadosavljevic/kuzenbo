import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { EmojiPickerActiveEmoji } from "./emoji-picker-active-emoji";

export type EmojiPickerActiveEmojiPreviewProps = Omit<
  ComponentProps<typeof EmojiPickerActiveEmoji>,
  "children"
> & {
  emptyText?: string;
};

export const EmojiPickerActiveEmojiPreview = ({
  emptyText = "Hover or navigate to see emoji details",
  ...props
}: EmojiPickerActiveEmojiPreviewProps) => (
  <EmojiPickerActiveEmoji {...props}>
    {({ emoji }) => (
      <div
        className={cn(
          "flex items-center gap-2 rounded-md border-t bg-popover px-3 py-2 text-sm",
          !emoji && "text-muted-foreground"
        )}
        data-slot="emoji-picker-active-emoji-preview"
      >
        {emoji ? (
          <>
            <span className="text-lg">{emoji.emoji}</span>
            <span>{emoji.label}</span>
          </>
        ) : (
          <span>{emptyText}</span>
        )}
      </div>
    )}
  </EmojiPickerActiveEmoji>
);
