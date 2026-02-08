import type { ComponentProps } from "react";

import { MinusSignIcon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";

const InputOTPSeparator = ({ ...props }: ComponentProps<"div">) => (
  <div
    className="flex items-center [&_svg:not([class*='size-'])]:size-4"
    data-slot="input-otp-separator"
    role="separator"
    {...props}
  >
    <HugeiconsIcon icon={MinusSignIcon} strokeWidth={2} />
  </div>
);

export { InputOTPSeparator };
