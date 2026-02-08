"use client";

import { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import { cn } from "tailwind-variants";

const AvatarImage = ({ className, ...props }: AvatarPrimitive.Image.Props) => (
  <AvatarPrimitive.Image
    className={cn(
      "aspect-square size-full rounded-full object-cover",
      className
    )}
    data-slot="avatar-image"
    {...props}
  />
);

export { AvatarImage };
