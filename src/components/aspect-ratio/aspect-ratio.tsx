import type { ComponentProps, CSSProperties } from "react";

import { cn } from "tailwind-variants";

const AspectRatio = ({
  ratio,
  className,
  ...props
}: ComponentProps<"div"> & { ratio: number }) => (
  <div
    className={cn("relative aspect-(--ratio)", className)}
    data-slot="aspect-ratio"
    style={
      {
        "--ratio": ratio,
      } as CSSProperties
    }
    {...props}
  />
);

export { AspectRatio };
