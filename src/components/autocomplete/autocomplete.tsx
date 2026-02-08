import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";

export type AutocompleteProps = ComponentProps<typeof BaseAutocomplete.Root>;

export const Autocomplete = (props: AutocompleteProps) => (
  <BaseAutocomplete.Root data-slot="autocomplete" {...props} />
);

export {
  AutocompleteClear,
  type AutocompleteClearProps,
} from "./autocomplete-clear";
export {
  AutocompleteCollection,
  type AutocompleteCollectionProps,
} from "./autocomplete-collection";
export {
  AutocompleteContent,
  type AutocompleteContentProps,
} from "./autocomplete-content";
export {
  AutocompleteEmpty,
  type AutocompleteEmptyProps,
} from "./autocomplete-empty";
export {
  AutocompleteGroup,
  type AutocompleteGroupProps,
} from "./autocomplete-group";
export {
  AutocompleteGroupLabel,
  type AutocompleteGroupLabelProps,
} from "./autocomplete-group-label";
export {
  AutocompleteIcon,
  type AutocompleteIconProps,
} from "./autocomplete-icon";
export {
  AutocompleteInput,
  type AutocompleteInputProps,
} from "./autocomplete-input";
export {
  AutocompleteItem,
  type AutocompleteItemProps,
} from "./autocomplete-item";
export {
  AutocompleteList,
  type AutocompleteListProps,
} from "./autocomplete-list";
export {
  AutocompletePortal,
  type AutocompletePortalProps,
} from "./autocomplete-portal";
export {
  AutocompletePositioner,
  type AutocompletePositionerProps,
} from "./autocomplete-positioner";
export { AutocompleteRow, type AutocompleteRowProps } from "./autocomplete-row";
export {
  AutocompleteSeparator,
  type AutocompleteSeparatorProps,
} from "./autocomplete-separator";
export {
  AutocompleteStatus,
  type AutocompleteStatusProps,
} from "./autocomplete-status";
export {
  AutocompleteTrigger,
  type AutocompleteTriggerProps,
} from "./autocomplete-trigger";
export {
  AutocompleteValue,
  type AutocompleteValueProps,
} from "./autocomplete-value";

export const { useFilter } = BaseAutocomplete;
