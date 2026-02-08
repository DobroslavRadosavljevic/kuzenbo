import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Separator } from "@/components/separator/separator";

const ButtonGroupSeparator = ({
  className,
  orientation = "vertical",
  ...props
}: ComponentProps<typeof Separator>) => (
  <Separator
    className={cn(
      "relative self-stretch bg-input data-[orientation=horizontal]:mx-px data-[orientation=vertical]:my-px data-[orientation=vertical]:h-auto data-[orientation=horizontal]:w-auto",
      className
    )}
    data-slot="button-group-separator"
    orientation={orientation}
    {...props}
  />
);

export { ButtonGroupSeparator };
