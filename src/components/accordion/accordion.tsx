import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { cn } from "tailwind-variants";

import { AccordionContent } from "./accordion-content";
import { AccordionItem } from "./accordion-item";
import { AccordionTrigger } from "./accordion-trigger";

const Accordion = ({ className, ...props }: AccordionPrimitive.Root.Props) => (
  <AccordionPrimitive.Root
    className={cn("flex w-full flex-col", className)}
    data-slot="accordion"
    {...props}
  />
);

Accordion.Content = AccordionContent;
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
