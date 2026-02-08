import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Badge } from "@/components/badge/badge";

export type PillProps = ComponentProps<typeof Badge>;

export const Pill = ({
  variant = "default",
  className,
  ...props
}: PillProps) => (
  <Badge
    className={cn("gap-2 rounded-full px-3 py-1.5 font-normal", className)}
    variant={variant}
    {...props}
  />
);

export { PillAvatar, type PillAvatarProps } from "./pill-avatar";
export {
  PillAvatarGroup,
  type PillAvatarGroupProps,
} from "./pill-avatar-group";
export { PillButton, type PillButtonProps } from "./pill-button";
export { PillDelta, type PillDeltaProps } from "./pill-delta";
export { PillIcon, type PillIconProps } from "./pill-icon";
export { PillIndicator, type PillIndicatorProps } from "./pill-indicator";
export { PillStatus, type PillStatusProps } from "./pill-status";
