import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { useCarousel } from "./use-carousel";

const CarouselContent = ({ className, ...props }: ComponentProps<"div">) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div
      className="overflow-hidden"
      data-slot="carousel-content"
      ref={carouselRef}
    >
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};

export { CarouselContent };
