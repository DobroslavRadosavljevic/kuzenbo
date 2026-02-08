import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

export type ToastContentProps = ComponentProps<typeof BaseToast.Content>;

export const ToastContent = ({ className, ...props }: ToastContentProps) => (
  <BaseToast.Content
    className={cn(
      "overflow-hidden transition-opacity duration-250 data-behind:pointer-events-none data-expanded:pointer-events-auto data-behind:opacity-0 data-expanded:opacity-100",
      className
    )}
    data-slot="toast-content"
    {...props}
  />
);
