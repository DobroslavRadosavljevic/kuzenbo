import type { Meta, StoryObj } from "@storybook/react";

import { QRCode } from "./qr-code";

const meta = {
  title: "Components/QRCode",
  component: QRCode,
  tags: ["autodocs"],
  argTypes: {
    data: { control: "text" },
  },
} satisfies Meta<typeof QRCode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { data: "https://example.com" },
  render: (args) => (
    <div className="size-32">
      <QRCode {...args} />
    </div>
  ),
};
