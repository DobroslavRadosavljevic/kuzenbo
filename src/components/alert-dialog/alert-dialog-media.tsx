import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const AlertDialogMedia = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "mb-2 inline-flex size-10 items-center justify-center rounded-md bg-muted sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-6",
      className
    )}
    data-slot="alert-dialog-media"
    {...props}
  />
);

export { AlertDialogMedia };
