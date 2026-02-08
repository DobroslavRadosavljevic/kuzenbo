import type { ComponentProps } from "react";

import { cn } from "tailwind-variants";

import { CardAction } from "./card-action";
import { CardContent } from "./card-content";
import { CardDescription } from "./card-description";
import { CardFooter } from "./card-footer";
import { CardHeader } from "./card-header";
import { CardTitle } from "./card-title";

const Card = ({
  className,
  size = "default",
  ...props
}: ComponentProps<"div"> & { size?: "default" | "sm" }) => (
  <div
    className={cn(
      "group/card flex flex-col gap-5 overflow-hidden rounded-xl border border-border bg-card py-5 text-card-foreground text-sm shadow-xs has-[>img:first-child]:pt-0 has-data-[slot=card-footer]:pb-0 data-[size=sm]:gap-3 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
      className
    )}
    data-size={size}
    data-slot="card"
    {...props}
  />
);

Card.Action = CardAction;
Card.Content = CardContent;
Card.Description = CardDescription;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Title = CardTitle;

export {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
