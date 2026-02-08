import type { ComponentProps } from "react";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import { cn } from "tailwind-variants";

import { MeterIndicator } from "./meter-indicator";
import { MeterTrack } from "./meter-track";

export type MeterProps = ComponentProps<typeof BaseMeter.Root>;

export const Meter = ({ className, children, ...props }: MeterProps) => (
  <BaseMeter.Root
    className={cn("w-full space-y-1.5", className)}
    data-slot="meter"
    {...props}
  >
    {children}
    <MeterTrack>
      <MeterIndicator />
    </MeterTrack>
  </BaseMeter.Root>
);

export { MeterIndicator, type MeterIndicatorProps } from "./meter-indicator";
export { MeterLabel, type MeterLabelProps } from "./meter-label";
export { MeterTrack, type MeterTrackProps } from "./meter-track";
export { MeterValue, type MeterValueProps } from "./meter-value";
