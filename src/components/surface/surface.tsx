import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { tv, type VariantProps } from "tailwind-variants";

export const surfaceVariants = tv({
  variants: {
    variant: {
      default: ["bg-surface-1"],
      secondary: ["bg-surface-2"],
      tertiary: ["bg-surface-3"],
      quaternary: ["bg-surface-4"],
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SurfaceVariants = VariantProps<typeof surfaceVariants>;
export type SurfaceProps = SurfaceVariants &
  useRender.ComponentProps<"div"> & {
    "data-slot"?: string;
    "data-variant"?: string;
  };

export const Surface = ({
  className,
  variant,
  render,
  ...props
}: SurfaceProps) => {
  const element = useRender({
    defaultTagName: "div",
    render,
    props: mergeProps<"div">(
      {
        className: surfaceVariants({ variant, className }),
      },
      {
        "data-slot": "surface",
        "data-variant": variant,
        ...props,
      }
    ),
  });

  return element;
};
