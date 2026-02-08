import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const CardFooter = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex items-center rounded-b-xl px-5 pb-5 group-data-[size=sm]/card:px-3 group-data-[size=sm]/card:pb-3 [.border-t]:pt-5 group-data-[size=sm]/card:[.border-t]:pt-3",
      className
    )}
    data-slot="card-footer"
    {...props}
  />
);

export { CardFooter };
