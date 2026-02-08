import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";
import { Cancel01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type ToastCloseProps = ComponentProps<typeof BaseToast.Close>;

export const ToastClose = ({
  className,
  children,
  ...props
}: ToastCloseProps) => (
  <BaseToast.Close
    className={cn(
      "absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded border-none bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      className
    )}
    data-slot="toast-close"
    {...props}
  >
    {children ?? (
      <HugeiconsIcon
        color="currentColor"
        icon={Cancel01Icon}
        size={16}
        strokeWidth={1.5}
      />
    )}
  </BaseToast.Close>
);
