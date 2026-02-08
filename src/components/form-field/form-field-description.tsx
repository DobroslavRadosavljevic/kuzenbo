import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const FormFieldDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "text-left font-normal text-muted-foreground text-sm leading-normal group-has-[[data-orientation=horizontal]]/field:text-balance [[data-variant=legend]+&]:-mt-1.5",
      "nth-last-2:-mt-1 last:mt-0",
      "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="field-description"
    {...props}
  />
);

export { FormFieldDescription };
