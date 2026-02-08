import type { ComponentProps } from "react";

import { ContextMenuContent } from "./context-menu-content";

const ContextMenuSubContent = ({
  ...props
}: ComponentProps<typeof ContextMenuContent>) => (
  <ContextMenuContent
    className="shadow-lg"
    data-slot="context-menu-sub-content"
    side="right"
    {...props}
  />
);

export { ContextMenuSubContent };
