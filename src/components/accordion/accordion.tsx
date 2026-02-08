import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "tailwind-variants";

const Accordion = ({ className, ...props }: AccordionPrimitive.Root.Props) => (
  <AccordionPrimitive.Root
    className={cn("flex w-full flex-col", className)}
    data-slot="accordion"
    {...props}
  />
);

export { AccordionContent } from "./accordion-content";
export { AccordionItem } from "./accordion-item";
export { AccordionTrigger } from "./accordion-trigger";
export { Accordion };
