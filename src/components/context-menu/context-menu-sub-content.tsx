import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { ContextMenuContent } from "./context-menu-content";

const ContextMenuSubContent = ({
  ...props
}: ComponentProps<typeof ContextMenuContent>) => (
  <ContextMenuContent
    className={cn("shadow-lg")}
    data-slot="context-menu-sub-content"
    side="right"
    {...props}
  />
);

export { ContextMenuSubContent };
