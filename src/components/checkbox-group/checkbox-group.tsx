import type { ComponentProps } from "react";

import { CheckboxGroup as BaseCheckboxGroup } from "@base-ui/react/checkbox-group";
import { cn } from "tailwind-variants";

export type CheckboxGroupProps = ComponentProps<typeof BaseCheckboxGroup>;

export const CheckboxGroup = ({ className, ...props }: CheckboxGroupProps) => (
  <BaseCheckboxGroup
    className={cn("flex flex-col items-start gap-1", className)}
    data-slot="checkbox-group"
    {...props}
  />
);
