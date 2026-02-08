import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { cn } from "tailwind-variants";

export type ToastDescriptionProps = ComponentProps<
  typeof BaseToast.Description
>;

export const ToastDescription = ({
  className,
  ...props
}: ToastDescriptionProps) => (
  <BaseToast.Description
    className={cn("text-muted-foreground text-sm leading-5", className)}
    data-slot="toast-description"
    {...props}
  />
);
