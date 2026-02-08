import type { ComponentProps } from "react";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import { cn } from "tailwind-variants";

export type MeterLabelProps = ComponentProps<typeof BaseMeter.Label>;

export const MeterLabel = ({ className, ...props }: MeterLabelProps) => (
  <BaseMeter.Label
    className={cn("font-medium text-sm", className)}
    data-slot="meter-label"
    {...props}
  />
);
