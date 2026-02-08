"use client";

import type { ComponentProps } from "react";

type CalendarWeekNumberProps = ComponentProps<"td">;

const CalendarWeekNumber = ({
  children,
  ...props
}: CalendarWeekNumberProps) => (
  <td {...props}>
    <div className="flex size-(--cell-size) items-center justify-center text-center">
      {children}
    </div>
  </td>
);

export { CalendarWeekNumber };
