import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { cn } from "tailwind-variants";

export type NumberFieldInputProps = ComponentProps<
  typeof BaseNumberField.Input
>;

export const NumberFieldInput = ({
  className,
  ...props
}: NumberFieldInputProps) => (
  <BaseNumberField.Input
    className={cn(
      "h-9 w-20 border-y text-center text-sm tabular-nums transition-colors hover:border-ring/70 focus:z-1 focus:outline-[3px] focus:-outline-offset-1 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    data-slot="number-field-input"
    {...props}
  />
);
