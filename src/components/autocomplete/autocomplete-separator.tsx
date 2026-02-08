import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteSeparatorProps = ComponentProps<
  typeof BaseAutocomplete.Separator
>;

export const AutocompleteSeparator = ({
  className,
  ...props
}: AutocompleteSeparatorProps) => (
  <BaseAutocomplete.Separator
    className={cn("pointer-events-none -mx-1 my-1 h-px bg-border", className)}
    data-slot="autocomplete-separator"
    {...props}
  />
);
