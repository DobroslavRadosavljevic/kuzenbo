"use client";

import type { ComponentProps } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

export type ComboboxProps<
  ItemValue,
  Multiple extends boolean | undefined = false,
> = ComponentProps<typeof ComboboxPrimitive.Root<ItemValue, Multiple>>;

export const Combobox = <
  ItemValue,
  Multiple extends boolean | undefined = false,
>({
  ...props
}: ComboboxProps<ItemValue, Multiple>) => (
  <ComboboxPrimitive.Root<ItemValue, Multiple>
    data-slot="combobox"
    {...props}
  />
);

export { ComboboxChip } from "./combobox-chip";
export { ComboboxChipRemove } from "./combobox-chip-remove";
export { ComboboxChips } from "./combobox-chips";
export { ComboboxChipsInput } from "./combobox-chips-input";
export { ComboboxClear } from "./combobox-clear";
export { ComboboxCollection } from "./combobox-collection";
export { ComboboxContent } from "./combobox-content";
export { ComboboxEmpty } from "./combobox-empty";
export { ComboboxGroup } from "./combobox-group";
export { ComboboxInput } from "./combobox-input";
export { ComboboxItem } from "./combobox-item";
export { ComboboxLabel } from "./combobox-label";
export { ComboboxList } from "./combobox-list";
export { ComboboxSeparator } from "./combobox-separator";
export { ComboboxTrigger } from "./combobox-trigger";
export { ComboboxValue } from "./combobox-value";
export { useComboboxAnchor } from "./use-combobox-anchor";
export const { useFilter } = ComboboxPrimitive;
