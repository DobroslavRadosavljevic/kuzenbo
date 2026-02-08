import type { ComponentProps } from "react";

import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

const AlertDialogCancel = ({
  className,
  variant = "outline",
  size = "default",
  ...props
}: AlertDialogPrimitive.Close.Props &
  Pick<ComponentProps<typeof Button>, "variant" | "size">) => (
  <AlertDialogPrimitive.Close
    className={cn(className)}
    data-slot="alert-dialog-cancel"
    render={<Button size={size} variant={variant} />}
    {...props}
  />
);

export { AlertDialogCancel };
