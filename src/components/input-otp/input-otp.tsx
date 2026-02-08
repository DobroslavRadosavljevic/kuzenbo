import type { ComponentProps } from "react";

import { OTPInput } from "input-otp";
import { cn } from "tailwind-variants";

import { InputOTPGroup } from "./input-otp-group";
import { InputOTPSeparator } from "./input-otp-separator";
import { InputOTPSlot } from "./input-otp-slot";

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

InputOTP.Group = InputOTPGroup;
InputOTP.Separator = InputOTPSeparator;
InputOTP.Slot = InputOTPSlot;

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
