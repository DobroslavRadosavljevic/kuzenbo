import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

const AlertDialogAction = ({
  className,
  ...props
}: ComponentProps<typeof Button>) => (
  <Button
    className={cn(className)}
    data-slot="alert-dialog-action"
    {...props}
  />
);

export { AlertDialogAction };
