import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteTriggerProps = ComponentProps<
  typeof BaseAutocomplete.Trigger
>;

export const AutocompleteTrigger = ({
  className,
  ...props
}: AutocompleteTriggerProps) => (
  <BaseAutocomplete.Trigger
    className={cn("cursor-clickable", className)}
    data-slot="autocomplete-trigger"
    {...props}
  />
);
