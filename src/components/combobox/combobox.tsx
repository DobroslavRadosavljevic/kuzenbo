"use client";

import type { ComponentProps } from "react";

import { Combobox as ComboboxPrimitive } from "@base-ui/react/combobox";

import { ComboboxChip } from "./combobox-chip";
import { ComboboxChipRemove } from "./combobox-chip-remove";
import { ComboboxChips } from "./combobox-chips";
import { ComboboxChipsInput } from "./combobox-chips-input";
import { ComboboxClear } from "./combobox-clear";
import { ComboboxCollection } from "./combobox-collection";
import { ComboboxContent } from "./combobox-content";
import { ComboboxEmpty } from "./combobox-empty";
import { ComboboxGroup } from "./combobox-group";
import { ComboboxInput } from "./combobox-input";
import { ComboboxItem } from "./combobox-item";
import { ComboboxLabel } from "./combobox-label";
import { ComboboxList } from "./combobox-list";
import { ComboboxSeparator } from "./combobox-separator";
import { ComboboxTrigger } from "./combobox-trigger";
import { ComboboxValue } from "./combobox-value";
import { useComboboxAnchor } from "./use-combobox-anchor";

export type ComboboxProps<
  ItemValue,
  Multiple extends boolean | undefined = false,
> = ComponentProps<typeof ComboboxPrimitive.Root<ItemValue, Multiple>>;

const Combobox = <ItemValue, Multiple extends boolean | undefined = false>({
  ...props
}: ComboboxProps<ItemValue, Multiple>) => (
  <ComboboxPrimitive.Root<ItemValue, Multiple>
    data-slot="combobox"
    {...props}
  />
);

Combobox.Chip = ComboboxChip;
Combobox.ChipRemove = ComboboxChipRemove;
Combobox.Chips = ComboboxChips;
Combobox.ChipsInput = ComboboxChipsInput;
Combobox.Clear = ComboboxClear;
Combobox.Collection = ComboboxCollection;
Combobox.Content = ComboboxContent;
Combobox.Empty = ComboboxEmpty;
Combobox.Group = ComboboxGroup;
Combobox.Input = ComboboxInput;
Combobox.Item = ComboboxItem;
Combobox.Label = ComboboxLabel;
Combobox.List = ComboboxList;
Combobox.Separator = ComboboxSeparator;
Combobox.Trigger = ComboboxTrigger;
Combobox.Value = ComboboxValue;

export const { useFilter } = ComboboxPrimitive;

export {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxClear,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
};
