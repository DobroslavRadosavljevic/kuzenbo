import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const FormFieldTitle = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex w-fit items-center gap-2 font-medium text-sm leading-snug group-data-[disabled=true]/field:opacity-50",
      className
    )}
    data-slot="field-label"
    {...props}
  />
);

export { FormFieldTitle };
