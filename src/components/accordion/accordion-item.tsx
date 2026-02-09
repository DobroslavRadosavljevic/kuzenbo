import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "tailwind-variants";

const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.Item.Props) => (
  <AccordionPrimitive.Item
    className={cn(
      "border-b border-border [&:last-child]:border-b-0",
      className
    )}
    data-slot="accordion-item"
    {...props}
  />
);

export { AccordionItem };
