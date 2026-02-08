import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "tailwind-variants";

import { RadioGroupItem } from "./radio-group-item";

const RadioGroup = ({ className, ...props }: RadioGroupPrimitive.Props) => (
  <RadioGroupPrimitive
    className={cn("grid w-full gap-2", className)}
    data-slot="radio-group"
    {...props}
  />
);

RadioGroup.Item = RadioGroupItem;

export { RadioGroup, RadioGroupItem };
