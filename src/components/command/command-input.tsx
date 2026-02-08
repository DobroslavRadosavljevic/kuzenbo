"use client";

import type { ComponentProps } from "react";

import { SearchIcon } from "@hugeicons-pro/core-stroke-rounded";
import { HugeiconsIcon } from "@hugeicons/react";
import { Command as CommandPrimitive } from "cmdk";
import { cn } from "tailwind-variants";

import {
  InputGroup,
  InputGroupAddon,
} from "@/components/input-group/input-group";

const CommandInput = ({
  className,
  ...props
}: ComponentProps<typeof CommandPrimitive.Input>) => (
  <div className="p-1 pb-0" data-slot="command-input-wrapper">
    <InputGroup className="h-8! rounded-lg! border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!">
      <CommandPrimitive.Input
        className={cn(
          "w-full text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        data-slot="command-input"
        {...props}
      />
      <InputGroupAddon>
        <HugeiconsIcon
          className="size-4 shrink-0 opacity-50"
          icon={SearchIcon}
          strokeWidth={2}
        />
      </InputGroupAddon>
    </InputGroup>
  </div>
);

export { CommandInput };
