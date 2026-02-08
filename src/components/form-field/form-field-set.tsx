import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const FormFieldSet = ({ className, ...props }: ComponentProps<"fieldset">) => (
  <fieldset
    className={cn(
      "flex flex-col gap-4 has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
      className
    )}
    data-slot="field-set"
    {...props}
  />
);

export { FormFieldSet };
