import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { MinusSignIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type NumberFieldDecrementProps = ComponentProps<
  typeof BaseNumberField.Decrement
>;

export const NumberFieldDecrement = ({
  className,
  ...props
}: NumberFieldDecrementProps) => (
  <BaseNumberField.Decrement
    className={cn(
      "flex size-9 cursor-pointer select-none items-center justify-center rounded-l-md border bg-muted transition-colors hover:border-ring/70 disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    data-slot="number-field-decrement"
    {...props}
  >
    <HugeiconsIcon icon={MinusSignIcon} />
  </BaseNumberField.Decrement>
);
