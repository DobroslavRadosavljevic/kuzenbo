import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Label } from "@/components/label/label";

const FormFieldLabel = ({
  className,
  ...props
}: ComponentProps<typeof Label>) => (
  <Label
    className={cn(
      "group/field-label peer/field-label flex w-fit gap-2 leading-snug has-[>[data-slot=field]]:rounded-lg has-[>[data-slot=field]]:border has-data-checked:border-primary has-data-checked:bg-primary/5 *:data-[slot=field]:p-2.5 group-data-[disabled=true]/field:opacity-50 dark:has-data-checked:bg-primary/10",
      "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col",
      className
    )}
    data-slot="field-label"
    {...props}
  />
);

export { FormFieldLabel };
