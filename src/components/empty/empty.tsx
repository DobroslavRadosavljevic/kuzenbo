import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

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

export { EmptyContent } from "./empty-content";
export { EmptyDescription } from "./empty-description";
export { EmptyHeader } from "./empty-header";
export { EmptyMedia } from "./empty-media";
export { EmptyTitle } from "./empty-title";
export { Empty };
