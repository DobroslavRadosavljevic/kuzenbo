import type { Meta } from "@storybook/react";

import { Portal } from "./portal";

const meta = {
  title: "Components/Portal",
  component: Portal,
  tags: ["autodocs"],
} satisfies Meta<typeof Portal>;

export default meta;

export const Default = {
  render: () => (
    <div className="relative rounded border p-4">
      <p>Content in normal flow</p>
      <Portal>
        <div className="mt-2 rounded bg-muted p-2 text-sm">
          Content rendered via portal (typically in document.body)
        </div>
      </Portal>
    </div>
  ),
};
