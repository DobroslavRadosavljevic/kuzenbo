"use client";

import type { ComponentProps } from "react";

import { Select as SelectPrimitive } from "@base-ui/react/select";

import { SelectContent } from "./select-content";
import { SelectGroup } from "./select-group";
import { SelectItem } from "./select-item";
import { SelectLabel } from "./select-label";
import { SelectScrollDownButton } from "./select-scroll-down-button";
import { SelectScrollUpButton } from "./select-scroll-up-button";
import { SelectSeparator } from "./select-separator";
import { SelectTrigger } from "./select-trigger";
import { SelectValue } from "./select-value";

export interface SelectOption<Value> {
  value: Value;
  label: string;
}

export type SelectProps<
  Value,
  Multiple extends boolean | undefined = false,
> = ComponentProps<typeof SelectPrimitive.Root<Value, Multiple>>;

const Select = <Value, Multiple extends boolean | undefined = false>({
  ...props
}: SelectProps<Value, Multiple>) => (
  <SelectPrimitive.Root<Value, Multiple> data-slot="select" {...props} />
);

Select.Content = SelectContent;
Select.Group = SelectGroup;
Select.Item = SelectItem;
Select.Label = SelectLabel;
Select.ScrollDownButton = SelectScrollDownButton;
Select.ScrollUpButton = SelectScrollUpButton;
Select.Separator = SelectSeparator;
Select.Trigger = SelectTrigger;
Select.Value = SelectValue;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
