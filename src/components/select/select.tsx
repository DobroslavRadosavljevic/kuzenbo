"use client";

import type { ComponentProps } from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";

export interface SelectOption<Value> {
  value: Value;
  label: string;
}

export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = ComponentProps<typeof SelectPrimitive.Root<Value, Multiple>>;

export const Select = <Value, Multiple extends boolean | undefined = false>({
  ...props
}: SelectProps<Value, Multiple>) => (
  <SelectPrimitive.Root<Value, Multiple> data-slot="select" {...props} />
);

export { SelectContent } from "./select-content";
export { SelectGroup } from "./select-group";
export { SelectItem } from "./select-item";
export { SelectLabel } from "./select-label";
export { SelectScrollDownButton } from "./select-scroll-down-button";
export { SelectScrollUpButton } from "./select-scroll-up-button";
export { SelectSeparator } from "./select-separator";
export { SelectTrigger } from "./select-trigger";
export { SelectValue } from "./select-value";
