"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

const AvatarBadge = ({ className, ...props }: ComponentProps<"span">) => (
  <span
    className={cn(
      "absolute right-0 bottom-0 z-10 inline-flex select-none items-center justify-center rounded-full bg-primary text-primary-foreground bg-blend-color ring-2 ring-background",
      "group-data-[size=sm]/avatar:size-2 group-data-[size=sm]/avatar:[&>svg]:hidden",
      "group-data-[size=default]/avatar:size-2.5 group-data-[size=default]/avatar:[&>svg]:size-2",
      "group-data-[size=lg]/avatar:size-3 group-data-[size=lg]/avatar:[&>svg]:size-2",
      className
    )}
    data-slot="avatar-badge"
    {...props}
  />
);

export { AvatarBadge };
