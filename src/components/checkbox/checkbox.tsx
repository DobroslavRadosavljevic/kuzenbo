import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { MinusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

export type CheckboxProps = CheckboxPrimitive.Root.Props;

const Checkbox = ({ className, indeterminate, ...props }: CheckboxProps) => (
  <CheckboxPrimitive.Root
    className={cn(
      "peer relative flex size-4 shrink-0 cursor-clickable items-center justify-center rounded-[4px] border border-input shadow-xs outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 group-has-disabled/field:opacity-50 aria-invalid:border-destructive aria-invalid:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary data-checked:border-primary data-indeterminate:border-primary data-checked:bg-primary data-indeterminate:bg-primary data-checked:text-primary-foreground data-indeterminate:text-primary-foreground dark:bg-input/30 dark:data-checked:bg-primary dark:data-indeterminate:bg-primary dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
      className
    )}
    data-slot="checkbox"
    indeterminate={indeterminate}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      data-slot="checkbox-indicator"
    >
      {indeterminate ? (
        <HugeiconsIcon icon={MinusSignIcon} strokeWidth={2} />
      ) : (
        <HugeiconsIcon icon={Tick02Icon} strokeWidth={2} />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
);

export { Checkbox };
