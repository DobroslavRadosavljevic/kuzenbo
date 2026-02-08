import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

export type ToastTitleProps = ComponentProps<typeof BaseToast.Title>;

export const ToastTitle = ({ className, ...props }: ToastTitleProps) => (
  <BaseToast.Title
    className={cn("font-medium text-sm leading-5", className)}
    data-slot="toast-title"
    {...props}
  />
);
