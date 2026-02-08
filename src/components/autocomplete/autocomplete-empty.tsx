import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteEmptyProps = ComponentProps<
  typeof BaseAutocomplete.Empty
>;

export const AutocompleteEmpty = ({
  className,
  ...props
}: AutocompleteEmptyProps) => (
  <BaseAutocomplete.Empty
    className={cn("py-6 text-center text-sm empty:m-0 empty:p-0", className)}
    data-slot="autocomplete-empty"
    {...props}
  />
);
