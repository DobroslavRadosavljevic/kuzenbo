import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CardContent = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn("px-6 group-data-[size=sm]/card:px-4", className)}
    data-slot="card-content"
    {...props}
  />
);

export { CardContent };
