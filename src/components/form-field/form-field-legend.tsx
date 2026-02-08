import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const FormFieldLegend = ({
  className,
  variant = "legend",
  ...props
}: ComponentProps<"legend"> & { variant?: "legend" | "label" }) => (
  <legend
    className={cn(
      "mb-1.5 font-medium data-[variant=label]:text-sm data-[variant=legend]:text-base",
      className
    )}
    data-slot="field-legend"
    data-variant={variant}
    {...props}
  />
);

export { FormFieldLegend };
