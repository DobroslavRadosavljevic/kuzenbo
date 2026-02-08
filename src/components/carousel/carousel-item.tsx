import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { useCarousel } from "./use-carousel";

const CarouselItem = ({ className, ...props }: ComponentProps<"div">) => {
  const { orientation } = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      data-slot="carousel-item"
      role="group"
      {...props}
    />
  );
};

export { CarouselItem };
