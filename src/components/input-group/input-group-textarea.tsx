"use client";

import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { Textarea } from "@/components/textarea/textarea";

const InputGroupTextarea = ({
  className,
  ...props
}: ComponentProps<typeof Textarea>) => (
  <Textarea
    className={cn(
      "flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent",
      className
    )}
    data-slot="input-group-control"
    {...props}
  />
);

export { InputGroupTextarea };
