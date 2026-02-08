import { Toolbar as ToolbarPrimitive } from "@base-ui/react/toolbar";
import { cn } from "tailwind-variants";

export type ToolbarLinkProps = ToolbarPrimitive.Link.Props;

const ToolbarLink = ({ className, ...props }: ToolbarLinkProps) => (
  <ToolbarPrimitive.Link
    className={cn(
      "inline-flex h-9 shrink-0 items-center gap-2 rounded-lg px-4 text-muted-foreground text-sm no-underline transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
      className
    )}
    {...props}
  />
);

export { ToolbarLink };
