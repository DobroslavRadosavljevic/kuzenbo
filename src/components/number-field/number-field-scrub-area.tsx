import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { cn } from "tailwind-variants";

import { NumberFieldScrubAreaCursor } from "./number-field-scrub-area-cursor";
import { useNumberField } from "./use-number-field";

export type NumberFieldScrubAreaProps = ComponentProps<
  typeof BaseNumberField.ScrubArea
>;

export const NumberFieldScrubArea = ({
  className,
  ...props
}: NumberFieldScrubAreaProps) => {
  const { id: fieldId } = useNumberField();

  return (
    <BaseNumberField.ScrubArea
      className={cn("cursor-ew-resize", className)}
      data-slot="number-field-scrub-area"
      {...props}
    >
      <label
        className="cursor-ew-resize font-medium text-foreground text-sm"
        data-slot="number-field-label"
        htmlFor={fieldId}
      >
        Amount
      </label>
      <NumberFieldScrubAreaCursor />
    </BaseNumberField.ScrubArea>
  );
};
