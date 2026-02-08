import type { ComponentProps } from "react";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import { cn } from "tailwind-variants";

export type MeterValueProps = ComponentProps<typeof BaseMeter.Value>;

export const MeterValue = ({ className, ...props }: MeterValueProps) => (
  <BaseMeter.Value
    className={cn("text-sm", className)}
    data-slot="meter-value"
    {...props}
  />
);
