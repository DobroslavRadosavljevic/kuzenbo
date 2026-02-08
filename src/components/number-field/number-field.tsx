import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { useId } from "react";
import { cn } from "tailwind-variants";

import { NumberFieldDecrement } from "./number-field-decrement";
import { NumberFieldGroup } from "./number-field-group";
import { NumberFieldIncrement } from "./number-field-increment";
import { NumberFieldInput } from "./number-field-input";
import { NumberFieldScrubArea } from "./number-field-scrub-area";
import { NumberFieldScrubAreaCursor } from "./number-field-scrub-area-cursor";
import { NumberFieldContext } from "./use-number-field";

export type NumberFieldProps = ComponentProps<typeof BaseNumberField.Root>;

const NumberField = ({
  id,
  className,
  children,
  ...props
}: NumberFieldProps) => {
  const fieldId = useId();

  return (
    <NumberFieldContext.Provider value={{ id: id || fieldId }}>
      <BaseNumberField.Root
        className={cn("flex flex-col items-start gap-1", className)}
        data-slot="number-field"
        id={id || fieldId}
        {...props}
      >
        {children}
        <NumberFieldGroup>
          <NumberFieldDecrement />
          <NumberFieldInput />
          <NumberFieldIncrement />
        </NumberFieldGroup>
      </BaseNumberField.Root>
    </NumberFieldContext.Provider>
  );
};

NumberField.Decrement = NumberFieldDecrement;
NumberField.Group = NumberFieldGroup;
NumberField.Increment = NumberFieldIncrement;
NumberField.Input = NumberFieldInput;
NumberField.ScrubArea = NumberFieldScrubArea;
NumberField.ScrubAreaCursor = NumberFieldScrubAreaCursor;

export type { NumberFieldDecrementProps } from "./number-field-decrement";
export type { NumberFieldGroupProps } from "./number-field-group";
export type { NumberFieldIncrementProps } from "./number-field-increment";
export type { NumberFieldInputProps } from "./number-field-input";
export type { NumberFieldScrubAreaProps } from "./number-field-scrub-area";
export type { NumberFieldScrubAreaCursorProps } from "./number-field-scrub-area-cursor";
export { useNumberField } from "./use-number-field";

export {
  NumberField,
  NumberFieldDecrement,
  NumberFieldGroup,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldScrubArea,
  NumberFieldScrubAreaCursor,
};
