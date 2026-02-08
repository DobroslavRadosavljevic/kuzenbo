import type { ComponentProps } from "react";

import { Meter as BaseMeter } from "@base-ui/react/meter";

export type MeterIndicatorProps = ComponentProps<typeof BaseMeter.Indicator>;

export const MeterIndicator = (props: MeterIndicatorProps) => (
  <BaseMeter.Indicator
    className="bg-primary"
    data-slot="meter-indicator"
    {...props}
  />
);
