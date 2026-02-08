import type { ComponentProps } from "react";

import { cn, tv, type VariantProps } from "tailwind-variants";

const emptyMediaVariants = tv({
  base: "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-4",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const EmptyMedia = ({
  className,
  variant = "default",
  ...props
}: ComponentProps<"div"> & VariantProps<typeof emptyMediaVariants>) => (
  <div
    className={cn(emptyMediaVariants({ variant }), className)}
    data-slot="empty-icon"
    data-variant={variant}
    {...props}
  />
);

export { EmptyMedia };
