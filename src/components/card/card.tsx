import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const Card = ({
  className,
  size = "default",
  ...props
}: ComponentProps<"div"> & { size?: "default" | "sm" }) => (
  <div
    className={cn(
      "group/card flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-card py-5 text-card-foreground text-sm shadow-xs has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      className
    )}
    data-size={size}
    data-slot="card"
    {...props}
  />
);

export { CardAction } from "./card-action";
export { CardContent } from "./card-content";
export { CardDescription } from "./card-description";
export { CardFooter } from "./card-footer";
export { CardHeader } from "./card-header";
export { CardTitle } from "./card-title";
export { Card };
