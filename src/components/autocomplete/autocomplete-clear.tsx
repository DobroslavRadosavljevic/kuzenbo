import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteClearProps = ComponentProps<
  typeof BaseAutocomplete.Clear
>;

export const AutocompleteClear = ({
  className,
  ...props
}: AutocompleteClearProps) => (
  <BaseAutocomplete.Clear
    className={cn("cursor-pointer", className)}
    data-slot="autocomplete-clear"
    {...props}
  />
);
