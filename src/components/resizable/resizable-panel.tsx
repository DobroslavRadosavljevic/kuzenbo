"use client";

import type { ComponentProps } from "react";

import { Panel } from "react-resizable-panels";

const ResizablePanel = ({ ...props }: ComponentProps<typeof Panel>) => (
  <Panel data-slot="resizable-panel" {...props} />
);

export { ResizablePanel };
