import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";

import { AutocompleteClear } from "./autocomplete-clear";
import { AutocompleteCollection } from "./autocomplete-collection";
import { AutocompleteContent } from "./autocomplete-content";
import { AutocompleteEmpty } from "./autocomplete-empty";
import { AutocompleteGroup } from "./autocomplete-group";
import { AutocompleteGroupLabel } from "./autocomplete-group-label";
import { AutocompleteIcon } from "./autocomplete-icon";
import { AutocompleteInput } from "./autocomplete-input";
import { AutocompleteItem } from "./autocomplete-item";
import { AutocompleteList } from "./autocomplete-list";
import { AutocompletePortal } from "./autocomplete-portal";
import { AutocompletePositioner } from "./autocomplete-positioner";
import { AutocompleteRow } from "./autocomplete-row";
import { AutocompleteSeparator } from "./autocomplete-separator";
import { AutocompleteStatus } from "./autocomplete-status";
import { AutocompleteTrigger } from "./autocomplete-trigger";
import { AutocompleteValue } from "./autocomplete-value";

export type AutocompleteProps = ComponentProps<typeof BaseAutocomplete.Root>;

const Autocomplete = (props: AutocompleteProps) => (
  <BaseAutocomplete.Root data-slot="autocomplete" {...props} />
);

Autocomplete.Clear = AutocompleteClear;
Autocomplete.Collection = AutocompleteCollection;
Autocomplete.Content = AutocompleteContent;
Autocomplete.Empty = AutocompleteEmpty;
Autocomplete.Group = AutocompleteGroup;
Autocomplete.GroupLabel = AutocompleteGroupLabel;
Autocomplete.Icon = AutocompleteIcon;
Autocomplete.Input = AutocompleteInput;
Autocomplete.Item = AutocompleteItem;
Autocomplete.List = AutocompleteList;
Autocomplete.Portal = AutocompletePortal;
Autocomplete.Positioner = AutocompletePositioner;
Autocomplete.Row = AutocompleteRow;
Autocomplete.Separator = AutocompleteSeparator;
Autocomplete.Status = AutocompleteStatus;
Autocomplete.Trigger = AutocompleteTrigger;
Autocomplete.Value = AutocompleteValue;

export const { useFilter } = BaseAutocomplete;

export type { AutocompleteClearProps } from "./autocomplete-clear";
export type { AutocompleteCollectionProps } from "./autocomplete-collection";
export type { AutocompleteContentProps } from "./autocomplete-content";
export type { AutocompleteEmptyProps } from "./autocomplete-empty";
export type { AutocompleteGroupProps } from "./autocomplete-group";
export type { AutocompleteGroupLabelProps } from "./autocomplete-group-label";
export type { AutocompleteIconProps } from "./autocomplete-icon";
export type { AutocompleteInputProps } from "./autocomplete-input";
export type { AutocompleteItemProps } from "./autocomplete-item";
export type { AutocompleteListProps } from "./autocomplete-list";
export type { AutocompletePortalProps } from "./autocomplete-portal";
export type { AutocompletePositionerProps } from "./autocomplete-positioner";
export type { AutocompleteRowProps } from "./autocomplete-row";
export type { AutocompleteSeparatorProps } from "./autocomplete-separator";
export type { AutocompleteStatusProps } from "./autocomplete-status";
export type { AutocompleteTriggerProps } from "./autocomplete-trigger";
export type { AutocompleteValueProps } from "./autocomplete-value";

export {
  Autocomplete,
  AutocompleteClear,
  AutocompleteCollection,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteIcon,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteRow,
  AutocompleteSeparator,
  AutocompleteStatus,
  AutocompleteTrigger,
  AutocompleteValue,
};
