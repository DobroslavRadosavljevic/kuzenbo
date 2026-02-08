import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const ItemDescription = ({ className, ...props }: ComponentProps<"p">) => (
  <p
    className={cn(
      "line-clamp-2 text-left font-normal text-muted-foreground text-sm leading-normal group-data-[size=xs]/item:text-xs [&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
      className
    )}
    data-slot="item-description"
    {...props}
  />
);

export { ItemDescription };
