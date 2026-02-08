import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const KbdGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <kbd
    className={cn("inline-flex items-center gap-1", className)}
    data-slot="kbd-group"
    {...props}
  />
);

export { KbdGroup };
