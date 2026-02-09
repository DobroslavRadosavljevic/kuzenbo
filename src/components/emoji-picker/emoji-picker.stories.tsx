import type { Meta, StoryObj } from "@storybook/react";

import { EmojiPicker } from "./emoji-picker";

const meta = {
  title: "Components/EmojiPicker",
  component: EmojiPicker,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof EmojiPicker>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <EmojiPicker>
      <EmojiPicker.Search />
      <EmojiPicker.Content>
        <EmojiPicker.List />
      </EmojiPicker.Content>
      <EmojiPicker.SkinToneSelector />
    </EmojiPicker>
  ),
};
