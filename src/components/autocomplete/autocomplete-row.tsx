import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteRowProps = ComponentProps<typeof BaseAutocomplete.Row>;

export const AutocompleteRow = ({
  className,
  ...props
}: AutocompleteRowProps) => (
  <BaseAutocomplete.Row
    className={cn("grid w-full scroll-my-1.5", className)}
    data-slot="autocomplete-row"
    {...props}
  />
);
