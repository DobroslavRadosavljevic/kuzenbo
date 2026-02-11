import type { ComponentProps } from "react";

import { Autocomplete as BaseAutocomplete } from "@base-ui/react/autocomplete";
import { cn } from "tailwind-variants";

import {
  kbOverlayDirectionalStateClasses,
  kbOverlaySurfaceStateClasses,
  kbOverlayTransitionClasses,
} from "@/lib/motion";

import { AutocompletePortal } from "./autocomplete-portal";
import { AutocompletePositioner } from "./autocomplete-positioner";

export type AutocompleteContentProps = ComponentProps<
  typeof BaseAutocomplete.Popup
> & {
  sideOffset?: BaseAutocomplete.Positioner.Props["sideOffset"];
};

export const AutocompleteContent = ({
  className,
  children,
  sideOffset = 4,
  ...props
}: AutocompleteContentProps) => (
  <AutocompletePortal>
    <AutocompletePositioner className="outline-none" sideOffset={sideOffset}>
      <BaseAutocomplete.Popup
        className={cn(
          "relative z-50 max-h-[min(var(--available-height),20rem)] min-w-(--anchor-width) origin-(--transform-origin) overflow-y-auto overflow-x-hidden overscroll-contain rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
          kbOverlayTransitionClasses,
          kbOverlaySurfaceStateClasses,
          kbOverlayDirectionalStateClasses,
          className
        )}
        data-slot="autocomplete-content"
        {...props}
      >
        {children}
      </BaseAutocomplete.Popup>
    </AutocompletePositioner>
  </AutocompletePortal>
);
