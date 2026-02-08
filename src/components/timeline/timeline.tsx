import { type ComponentProps, type ReactNode, useMemo } from "react";
import { cn, tv, type VariantProps } from "tailwind-variants";

import { type Direction, TimelineContext } from "./use-timeline";

const timelineVariants = tv({
  base: [
    "group/timeline relative flex",
    "[--timeline-connector-thickness:0.125rem]",
    "[--timeline-dot-size:0.875rem]",
  ],
  variants: {
    orientation: {
      vertical: "flex-col",
      horizontal: "flex-row items-start",
    },
    variant: {
      default: "",
      alternate: "",
    },
  },
  compoundVariants: [
    {
      orientation: "vertical",
      variant: "default",
      className: "gap-0",
    },
    {
      orientation: "horizontal",
      variant: "default",
      className: "gap-0",
    },
    {
      orientation: "vertical",
      variant: "alternate",
      className: "relative w-full gap-0",
    },
    {
      orientation: "horizontal",
      variant: "alternate",
      className: "items-center gap-0",
    },
  ],
  defaultVariants: {
    orientation: "vertical",
    variant: "default",
  },
});

interface TimelineProps
  extends ComponentProps<"ol">, VariantProps<typeof timelineVariants> {
  dir?: Direction;
  activeIndex?: number;
  children?: ReactNode;
}

const Timeline = ({
  orientation = "vertical",
  variant = "default",
  dir = "ltr",
  activeIndex,
  className,
  children,
  ...props
}: TimelineProps) => {
  const contextValue = useMemo(
    () => ({
      orientation,
      variant,
      dir,
      activeIndex,
    }),
    [orientation, variant, dir, activeIndex]
  );

  return (
    <TimelineContext.Provider value={contextValue}>
      <ol
        className={cn(timelineVariants({ orientation, variant }), className)}
        data-orientation={orientation}
        data-slot="timeline"
        data-variant={variant}
        dir={dir}
        {...props}
      >
        {children}
      </ol>
    </TimelineContext.Provider>
  );
};

export { TimelineConnector } from "./timeline-connector";
export { TimelineContent } from "./timeline-content";
export { TimelineDescription } from "./timeline-description";
export { TimelineDot } from "./timeline-dot";
export { TimelineHeader } from "./timeline-header";
export { TimelineItem } from "./timeline-item";
export { TimelineTime } from "./timeline-time";
export { TimelineTitle } from "./timeline-title";
export { Timeline, timelineVariants };
export type { TimelineProps };
