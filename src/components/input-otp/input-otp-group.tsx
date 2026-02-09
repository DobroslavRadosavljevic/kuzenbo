import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const InputOTPGroup = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex items-center rounded-md has-aria-invalid:border-danger has-aria-invalid:ring-[3px] has-aria-invalid:ring-danger/20 dark:has-aria-invalid:ring-danger/40",
      className
    )}
    data-slot="input-otp-group"
    {...props}
  />
);

export { InputOTPGroup };
