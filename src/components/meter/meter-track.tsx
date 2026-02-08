import type { ComponentProps } from "react";

import { Meter as BaseMeter } from "@base-ui/react/meter";
import { cn } from "tailwind-variants";

export type MeterTrackProps = ComponentProps<typeof BaseMeter.Track>;

export const MeterTrack = ({ className, ...props }: MeterTrackProps) => (
  <BaseMeter.Track
    className={cn(
      "h-2 w-full overflow-hidden rounded-xs bg-primary/20",
      className
    )}
    data-slot="meter-track"
    {...props}
  />
);
