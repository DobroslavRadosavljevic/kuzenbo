import { Separator as SeparatorPrimitive } from "@base-ui/react/separator";
import { cn } from "tailwind-variants";

export type SeparatorProps = SeparatorPrimitive.Props;

const Separator = ({
  className,
  orientation = "horizontal",
  ...props
}: SeparatorProps) => (
  <SeparatorPrimitive
    className={cn(
      "shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
      className
    )}
    data-slot="separator"
    orientation={orientation}
    {...props}
  />
);

export { Separator };
