import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteGroupLabelProps = ComponentProps<
  typeof BaseAutocomplete.GroupLabel
>;

export const AutocompleteGroupLabel = ({
  className,
  ...props
}: AutocompleteGroupLabelProps) => (
  <BaseAutocomplete.GroupLabel
    className={cn(
      "px-2 py-1.5 font-medium text-muted-foreground text-xs",
      className
    )}
    data-slot="autocomplete-group-label"
    {...props}
  />
);
