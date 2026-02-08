import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Badge } from "@/components/badge/badge";

export type AnnouncementProps = ComponentProps<typeof Badge> & {
  themed?: boolean;
};

export const Announcement = ({
  variant = "outline",
  themed = false,
  className,
  ...props
}: AnnouncementProps) => (
  <Badge
    className={cn(
      "group max-w-full gap-2 rounded-full bg-background px-3 py-0.5 font-medium shadow-sm transition-all",
      "hover:shadow-md",
      themed && "announcement-themed border-foreground/5",
      className
    )}
    variant={variant}
    {...props}
  />
);

export { AnnouncementTag, type AnnouncementTagProps } from "./announcement-tag";
export {
  AnnouncementTitle,
  type AnnouncementTitleProps,
} from "./announcement-title";
