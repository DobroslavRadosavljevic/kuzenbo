import type { ComponentProps } from "react";

import { NumberField as BaseNumberField } from "@base-ui/react/number-field";
import { ArrowHorizontalIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type NumberFieldScrubAreaCursorProps = ComponentProps<
  typeof BaseNumberField.ScrubAreaCursor
>;

export const NumberFieldScrubAreaCursor = ({
  className,
  ...props
}: NumberFieldScrubAreaCursorProps) => (
  <BaseNumberField.ScrubAreaCursor
    className={cn("drop-shadow-sm filter", className)}
    data-slot="number-field-scrub-area-cursor"
    {...props}
  >
    <HugeiconsIcon className="size-4.5" icon={ArrowHorizontalIcon} />
  </BaseNumberField.ScrubAreaCursor>
);
