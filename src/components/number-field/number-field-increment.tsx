import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { Add01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type NumberFieldIncrementProps = ComponentProps<
  typeof BaseNumberField.Increment
>;

export const NumberFieldIncrement = ({
  className,
  ...props
}: NumberFieldIncrementProps) => (
  <BaseNumberField.Increment
    className={cn(
      "flex size-9 select-none items-center justify-center rounded-r-md border bg-input transition-colors hover:border-ring/70 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    data-slot="number-field-increment"
    {...props}
  >
    <HugeiconsIcon icon={Add01Icon} />
  </BaseNumberField.Increment>
);
