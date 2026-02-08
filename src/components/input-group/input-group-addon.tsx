"use client";

import type { ComponentProps, KeyboardEvent, MouseEvent } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

const inputGroupAddonVariants = tv({
  base: "flex h-auto cursor-text select-none items-center justify-center gap-2 py-1.5 font-medium text-muted-foreground text-sm group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  variants: {
    align: {
      "inline-start":
        "order-first pl-2 has-[>button]:ml-[-0.25rem] has-[>kbd]:ml-[-0.15rem]",
      "inline-end":
        "order-last pr-2 has-[>button]:mr-[-0.25rem] has-[>kbd]:mr-[-0.15rem]",
      "block-start":
        "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
      "block-end":
        "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2",
    },
  },
  defaultVariants: {
    align: "inline-start",
  },
});

const focusInput = (e: MouseEvent<HTMLDivElement>) => {
  if ((e.target as HTMLElement).closest("button")) {
    return;
  }
  e.currentTarget.parentElement?.querySelector("input")?.focus();
};

const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
  if (e.key === "Enter" || e.key === " ") {
    e.currentTarget.parentElement?.querySelector("input")?.focus();
  }
};

const InputGroupAddon = ({
  className,
  align = "inline-start",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof inputGroupAddonVariants>) => (
  <div
    className={cn(inputGroupAddonVariants({ align }), className)}
    data-align={align}
    data-slot="input-group-addon"
    onClick={focusInput}
    onKeyDown={handleKeyDown}
    role="group"
    {...props}
  />
);

export { InputGroupAddon, inputGroupAddonVariants };
