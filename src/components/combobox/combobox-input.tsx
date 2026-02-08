"use client";

import { Combobox as ComboboxPrimitive } from "@base-ui/react";
import { cn } from "tailwind-variants";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/input-group/input-group";

import { ComboboxClear } from "./combobox-clear";
import { ComboboxTrigger } from "./combobox-trigger";

const ComboboxInput = ({
  className,
  children,
  disabled = false,
  showTrigger = true,
  showClear = false,
  ...props
}: ComboboxPrimitive.Input.Props & {
  showTrigger?: boolean;
  showClear?: boolean;
}) => (
  <InputGroup className={cn("w-auto", className)}>
    <ComboboxPrimitive.Input
      render={<InputGroupInput disabled={disabled} />}
      {...props}
    />
    <InputGroupAddon align="inline-end">
      {showTrigger && (
        <InputGroupButton
          className="group-has-data-[slot=combobox-clear]/input-group:hidden data-pressed:bg-transparent"
          data-slot="input-group-button"
          disabled={disabled}
          render={<ComboboxTrigger />}
          size="icon-xs"
          variant="ghost"
        />
      )}
      {showClear && <ComboboxClear disabled={disabled} />}
    </InputGroupAddon>
    {children}
  </InputGroup>
);

export { ComboboxInput };
