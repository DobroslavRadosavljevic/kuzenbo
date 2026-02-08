import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteStatusProps = ComponentProps<
  typeof BaseAutocomplete.Status
>;

export const AutocompleteStatus = ({
  className,
  ...props
}: AutocompleteStatusProps) => (
  <BaseAutocomplete.Status
    className={cn(
      "flex items-center gap-2 px-2 py-1.5 text-muted-foreground text-sm",
      className
    )}
    data-slot="autocomplete-status"
    {...props}
  />
);
