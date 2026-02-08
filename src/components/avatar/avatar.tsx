"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

import { AvatarBadge } from "./avatar-badge";
import { AvatarFallback } from "./avatar-fallback";
import { AvatarGroup } from "./avatar-group";
import { AvatarGroupCount } from "./avatar-group-count";
import { AvatarImage } from "./avatar-image";

const Avatar = ({
  className,
  size = "default",
  ...props
}: AvatarPrimitive.Root.Props & {
  size?: "default" | "sm" | "lg";
}) => (
  <AvatarPrimitive.Root
    className={cn(
      "group/avatar relative flex size-8 shrink-0 select-none rounded-full after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
      className
    )}
    data-size={size}
    data-slot="avatar"
    {...props}
  />
);

Avatar.Badge = AvatarBadge;
Avatar.Fallback = AvatarFallback;
Avatar.Group = AvatarGroup;
Avatar.GroupCount = AvatarGroupCount;
Avatar.Image = AvatarImage;

export {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
};
