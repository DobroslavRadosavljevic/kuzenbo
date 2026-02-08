import type { ComponentProps } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

const fieldVariants = tv({
  base: "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  variants: {
    orientation: {
      vertical: "flex-col *:w-full [&>.sr-only]:w-auto",
      horizontal:
        "flex-row items-center has-[>[data-slot=field-content]]:items-start *:data-[slot=field-label]:flex-auto has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
      responsive:
        "@md/field-group:flex-row flex-col @md/field-group:items-center *:w-full @md/field-group:*:w-auto @md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:*:data-[slot=field-label]:flex-auto [&>.sr-only]:w-auto @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

const FormField = ({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof fieldVariants>) => (
  <div
    className={cn(fieldVariants({ orientation }), className)}
    data-orientation={orientation}
    data-slot="field"
    role="group"
    {...props}
  />
);

export { FormFieldContent } from "./form-field-content";
export { FormFieldDescription } from "./form-field-description";
export { FormFieldError } from "./form-field-error";
export { FormFieldGroup } from "./form-field-group";
export { FormFieldLabel } from "./form-field-label";
export { FormFieldLegend } from "./form-field-legend";
export { FormFieldSeparator } from "./form-field-separator";
export { FormFieldSet } from "./form-field-set";
export { FormFieldTitle } from "./form-field-title";
export { fieldVariants, FormField };
