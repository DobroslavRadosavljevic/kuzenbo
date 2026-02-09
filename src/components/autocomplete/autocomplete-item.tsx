import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

export type AutocompleteItemProps = ComponentProps<
  typeof BaseAutocomplete.Item
>;

export const AutocompleteItem = ({
  className,
  children,
  ...props
}: AutocompleteItemProps) => (
  <BaseAutocomplete.Item
    className={cn(
      "relative flex w-full cursor-pointer select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden data-disabled:pointer-events-none data-disabled:cursor-not-allowed data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    data-slot="autocomplete-item"
    {...props}
  >
    {children}
  </BaseAutocomplete.Item>
);
