import type { ComponentProps } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

import { FormFieldContent } from "./form-field-content";
import { FormFieldDescription } from "./form-field-description";
import { FormFieldError } from "./form-field-error";
import { FormFieldGroup } from "./form-field-group";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldLegend } from "./form-field-legend";
import { FormFieldSeparator } from "./form-field-separator";
import { FormFieldSet } from "./form-field-set";
import { FormFieldTitle } from "./form-field-title";

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

FormField.Content = FormFieldContent;
FormField.Description = FormFieldDescription;
FormField.Error = FormFieldError;
FormField.Group = FormFieldGroup;
FormField.Label = FormFieldLabel;
FormField.Legend = FormFieldLegend;
FormField.Separator = FormFieldSeparator;
FormField.Set = FormFieldSet;
FormField.Title = FormFieldTitle;

export {
  FormField,
  fieldVariants,
  FormFieldContent,
  FormFieldDescription,
  FormFieldError,
  FormFieldGroup,
  FormFieldLabel,
  FormFieldLegend,
  FormFieldSeparator,
  FormFieldSet,
  FormFieldTitle,
};
