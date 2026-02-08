import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const FormFieldContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "group/field-content flex flex-1 flex-col gap-0.5 leading-snug",
      className
    )}
    data-slot="field-content"
    {...props}
  />
);

export { FormFieldContent };
