import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteInputProps = ComponentProps<
  typeof BaseAutocomplete.Input
>;

export const AutocompleteInput = ({
  className,
  ...props
}: AutocompleteInputProps) => (
  <BaseAutocomplete.Input
    className={cn(
      "flex h-9 w-full min-w-0 rounded-md border bg-input px-3 py-1 text-base shadow-xs outline-none transition-[color,box-shadow,border-color] selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 group-hover:border-ring/70 md:text-sm",
      "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",
      "aria-invalid:border-danger aria-invalid:ring-danger/50",
      className
    )}
    data-slot="autocomplete-input"
    {...props}
  />
);
