import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import { cn } from "tailwind-variants";

const RadioGroup = ({ className, ...props }: RadioGroupPrimitive.Props) => (
  <RadioGroupPrimitive
    className={cn("grid w-full gap-2", className)}
    data-slot="radio-group"
    {...props}
  />
);

export { RadioGroupItem } from "./radio-group-item";
export { RadioGroup };
