import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Badge } from "@/components/badge/badge";

import { PillAvatar } from "./pill-avatar";
import { PillAvatarGroup } from "./pill-avatar-group";
import { PillButton } from "./pill-button";
import { PillDelta } from "./pill-delta";
import { PillIcon } from "./pill-icon";
import { PillIndicator } from "./pill-indicator";
import { PillStatus } from "./pill-status";

export type PillProps = ComponentProps<typeof Badge>;

const Pill = ({ variant = "default", className, ...props }: PillProps) => (
  <Badge
    className={cn("gap-2 rounded-full px-3 py-1.5 font-normal", className)}
    variant={variant}
    {...props}
  />
);

Pill.Avatar = PillAvatar;
Pill.AvatarGroup = PillAvatarGroup;
Pill.Button = PillButton;
Pill.Delta = PillDelta;
Pill.Icon = PillIcon;
Pill.Indicator = PillIndicator;
Pill.Status = PillStatus;

export {
  Pill,
  PillAvatar,
  PillAvatarGroup,
  PillButton,
  PillDelta,
  PillIcon,
  PillIndicator,
  PillStatus,
};

export type { PillAvatarProps } from "./pill-avatar";
export type { PillAvatarGroupProps } from "./pill-avatar-group";
export type { PillButtonProps } from "./pill-button";
export type { PillDeltaProps } from "./pill-delta";
export type { PillIconProps } from "./pill-icon";
export type { PillIndicatorProps } from "./pill-indicator";
export type { PillStatusProps } from "./pill-status";
