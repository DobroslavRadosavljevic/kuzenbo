import type { ComponentProps } from "react";

export type EmojiPickerListRowProps = ComponentProps<"div">;

export const EmojiPickerListRow = ({
  children,
  ...restProps
}: EmojiPickerListRowProps) => (
  <div
    className="scroll-my-1.5 px-1.5"
    data-slot="emoji-picker-list-row"
    {...restProps}
  >
    {children}
  </div>
);
