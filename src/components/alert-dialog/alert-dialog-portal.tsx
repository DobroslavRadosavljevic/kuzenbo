import { AlertDialog as AlertDialogPrimitive } from "@base-ui/react/alert-dialog";

const AlertDialogPortal = ({ ...props }: AlertDialogPrimitive.Portal.Props) => (
  <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
);

export { AlertDialogPortal };
