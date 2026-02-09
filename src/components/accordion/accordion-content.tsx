import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "tailwind-variants";

const AccordionContent = ({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) => (
  <AccordionPrimitive.Panel
    className={cn(
      "h-[var(--accordion-panel-height)] overflow-hidden text-sm transition-[height] ease-out data-[ending-style]:h-0 data-[starting-style]:h-0",
      className
    )}
    data-slot="accordion-content"
    {...props}
  >
    <div className="min-w-0 pb-4 pt-0 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4">
      {children}
    </div>
  </AccordionPrimitive.Panel>
);

export { AccordionContent };
