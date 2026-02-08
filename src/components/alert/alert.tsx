import type { ComponentProps } from "react";

import { tv, type VariantProps } from "tailwind-variants";

import { AlertAction } from "./alert-action";
import { AlertDescription } from "./alert-description";
import { AlertTitle } from "./alert-title";

const alertVariants = tv({
  base: [
    "group/alert relative grid w-full gap-0.5 rounded-lg border px-4 py-3 text-left text-sm",
    "has-data-[slot=alert-action]:relative",
    "has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5",
    "has-data-[slot=alert-action]:pr-18",
    "*:[svg:not([class*='size-'])]:size-4",
    "*:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current",
  ],
  variants: {
    variant: {
      default: [
        "bg-card text-card-foreground",
        "[&_*[data-slot=alert-description]]:text-muted-foreground",
      ],
      destructive: [
        "bg-card text-destructive",
        "*:data-[slot=alert-description]:text-destructive/90",
        "*:[svg]:text-current",
      ],
      warning: [
        "border-warning-border",
        "bg-warning text-warning-foreground",
        "[&_*[data-slot=alert-description]]:text-warning-foreground/70",
      ],
      danger: [
        "border-danger-border",
        "bg-danger text-danger-foreground",
        "[&_*[data-slot=alert-description]]:text-danger-foreground/70",
      ],
      info: [
        "border-info-border",
        "bg-info text-info-foreground",
        "[&_*[data-slot=alert-description]]:text-info-foreground/70",
      ],
      success: [
        "border-success-border",
        "bg-success text-success-foreground",
        "[&_*[data-slot=alert-description]]:text-success-foreground/70",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type AlertVariants = VariantProps<typeof alertVariants>;

export type AlertProps = AlertVariants & ComponentProps<"div">;

const Alert = ({ className, variant, ...props }: AlertProps) => (
  <div
    className={alertVariants({ variant, className })}
    data-slot="alert"
    role="alert"
    {...props}
  />
);

Alert.Action = AlertAction;
Alert.Description = AlertDescription;
Alert.Title = AlertTitle;

export { Alert, alertVariants, AlertAction, AlertDescription, AlertTitle };
