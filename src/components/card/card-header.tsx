import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CardHeader = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-5 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] group-data-[size=sm]/card:px-3 [.border-b]:pb-5 group-data-[size=sm]/card:[.border-b]:pb-3",
      className
    )}
    data-slot="card-header"
    {...props}
  />
);

export { CardHeader };
