import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { cn } from "tailwind-variants";

import { ScrollBar } from "./scroll-bar";

const ScrollArea = ({
  className,
  children,
  ...props
}: ScrollAreaPrimitive.Root.Props) => (
  <ScrollAreaPrimitive.Root
    className={cn("relative", className)}
    data-slot="scroll-area"
    {...props}
  >
    <ScrollAreaPrimitive.Viewport
      className="size-full rounded-[inherit] outline-none transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-[3px] focus-visible:ring-ring/50"
      data-slot="scroll-area-viewport"
    >
      {children}
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

export { ScrollBar } from "./scroll-bar";
export { ScrollArea };
