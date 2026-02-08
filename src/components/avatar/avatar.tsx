"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

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

export { AvatarBadge } from "./avatar-badge";
export { AvatarFallback } from "./avatar-fallback";
export { AvatarGroup } from "./avatar-group";
export { AvatarGroupCount } from "./avatar-group-count";
export { AvatarImage } from "./avatar-image";
export { Avatar };
