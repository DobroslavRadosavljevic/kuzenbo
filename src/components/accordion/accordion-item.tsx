import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "tailwind-variants";

const AccordionItem = ({
  className,
  ...props
}: AccordionPrimitive.Item.Props) => (
  <AccordionPrimitive.Item
    className={cn("not-last:border-b", className)}
    data-slot="accordion-item"
    {...props}
  />
);

export { AccordionItem };
