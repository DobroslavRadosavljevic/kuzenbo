import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompletePositionerProps = ComponentProps<
  typeof BaseAutocomplete.Positioner
>;

export const AutocompletePositioner = ({
  className,
  ...props
}: AutocompletePositionerProps) => (
  <BaseAutocomplete.Positioner
    className={cn("z-50", className)}
    data-slot="autocomplete-positioner"
    {...props}
  />
);
