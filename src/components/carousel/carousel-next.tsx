import type { ComponentProps } from "react";

import { ArrowRight01Icon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { cn } from "tailwind-variants";

import { Button } from "@/components/button/button";

import { useCarousel } from "./use-carousel";

const CarouselNext = ({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}: ComponentProps<typeof Button>) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      className={cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      data-slot="carousel-next"
      disabled={!canScrollNext}
      onClick={scrollNext}
      size={size}
      variant={variant}
      {...props}
    >
      <HugeiconsIcon icon={ArrowRight01Icon} strokeWidth={2} />
      <span className="sr-only">Next slide</span>
    </Button>
  );
};

export { CarouselNext };
