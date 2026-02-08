import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/avatar/avatar";

export type PillAvatarProps = ComponentProps<typeof AvatarImage> & {
  fallback?: string;
};

export const PillAvatar = ({
  fallback,
  className,
  ...props
}: PillAvatarProps) => (
  <Avatar className={cn("-ml-1 h-4 w-4", className)}>
    <AvatarImage {...props} />
    <AvatarFallback>{fallback}</AvatarFallback>
  </Avatar>
);
