import type { ComponentProps } from "react";

export type EmojiPickerListEmojiProps = {
  emoji: { emoji: string };
} & ComponentProps<"button">;

export const EmojiPickerListEmoji = ({
  emoji,
  ...restProps
}: EmojiPickerListEmojiProps) => (
  <button
    type="button"
    className="flex size-8 items-center justify-center rounded-md text-lg data-active:bg-accent"
    data-slot="emoji-picker-list-emoji"
    {...restProps}
  >
    {emoji.emoji}
  </button>
);
