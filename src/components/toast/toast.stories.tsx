import type { Meta } from "@storybook/react";

import { useCallback } from "react";

import { Button } from "@/components/button/button";

import { ToastProvider } from "./toast-provider";
import { useToast } from "./use-toast";

const ToastDemo = () => {
  const toast = useToast();
  const handleClick = useCallback(
    () => toast.add({ title: "Toast notification" }),
    [toast]
  );
  return <Button onClick={handleClick}>Show Toast</Button>;
};

const meta = {
  title: "Components/Toast",
  component: ToastProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>;

export default meta;

export const Default = {
  render: () => <ToastDemo />,
};
