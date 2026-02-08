import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

export type ToastActionProps = ComponentProps<typeof BaseToast.Action>;

export const ToastAction = ({ className, ...props }: ToastActionProps) => (
  <BaseToast.Action
    className={cn(className)}
    data-slot="toast-action"
    {...props}
  />
);
