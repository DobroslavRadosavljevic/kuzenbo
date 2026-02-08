import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";
import { cn } from "tailwind-variants";

const AlertDialogTrigger = ({
  className,
  ...props
}: AlertDialogPrimitive.Trigger.Props) => (
  <AlertDialogPrimitive.Trigger
    className={cn("cursor-clickable", className)}
    data-slot="alert-dialog-trigger"
    {...props}
  />
);

export { AlertDialogTrigger };
