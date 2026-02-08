import type { ComponentProps } from "react";

import { OTPInput } from "input-otp";
import { cn } from "tailwind-variants";

const InputOTP = ({
  className,
  containerClassName,
  ...props
}: ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
}) => (
  <OTPInput
    className={cn("disabled:cursor-not-allowed", className)}
    containerClassName={cn(
      "cn-input-otp flex items-center has-disabled:opacity-50",
      containerClassName
    )}
    data-slot="input-otp"
    spellCheck={false}
    {...props}
  />
);

export { InputOTPGroup } from "./input-otp-group";
export { InputOTPSeparator } from "./input-otp-separator";
export { InputOTPSlot } from "./input-otp-slot";
export { InputOTP };
