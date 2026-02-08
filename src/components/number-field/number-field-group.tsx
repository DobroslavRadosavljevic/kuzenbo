import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { cn } from "tailwind-variants";

export type NumberFieldGroupProps = ComponentProps<
  typeof BaseNumberField.Group
>;

export const NumberFieldGroup = ({
  className,
  ...props
}: NumberFieldGroupProps) => (
  <BaseNumberField.Group
    className={cn(
      "flex rounded-md text-foreground shadow-xs transition-shadow",
      className
    )}
    data-slot="number-field-group"
    {...props}
  />
);
