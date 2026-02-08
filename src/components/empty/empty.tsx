import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { EmptyContent } from "./empty-content";
import { EmptyDescription } from "./empty-description";
import { EmptyHeader } from "./empty-header";
import { EmptyMedia } from "./empty-media";
import { EmptyTitle } from "./empty-title";

const Empty = ({ className, ...props }: ComponentProps<"div">) => (
  <div
    className={cn(
      "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 text-balance rounded-lg border-dashed p-12 text-center",
      className
    )}
    data-slot="empty"
    {...props}
  />
);

Empty.Content = EmptyContent;
Empty.Description = EmptyDescription;
Empty.Header = EmptyHeader;
Empty.Media = EmptyMedia;
Empty.Title = EmptyTitle;

export {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
};
