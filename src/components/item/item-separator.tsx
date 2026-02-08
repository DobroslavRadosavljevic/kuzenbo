import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Separator } from "@/components/separator/separator";

const ItemSeparator = ({
  className,
  ...props
}: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn("my-2", className)}
    data-slot="item-separator"
    orientation="horizontal"
    {...props}
  />
);

export { ItemSeparator };
