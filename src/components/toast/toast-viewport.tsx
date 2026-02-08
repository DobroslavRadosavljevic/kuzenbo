import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

export type ToastViewportProps = ComponentProps<typeof BaseToast.Viewport>;

export const ToastViewport = ({ className, ...props }: ToastViewportProps) => (
  <BaseToast.Viewport
    className={cn(
      "fixed top-auto right-4 bottom-4 z-[100] mx-auto flex w-[250px] sm:right-8 sm:bottom-8 sm:w-[300px]",
      className
    )}
    data-slot="toast-viewport"
    {...props}
  />
);
