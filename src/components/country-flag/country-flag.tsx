"use client";

import { CZ, DE, ES, FR, IT, PL, PT, US } from "country-flag-icons/react/3x2";
import { cn } from "tailwind-variants";

export type CountryCode = "US" | "CZ" | "ES" | "FR" | "DE" | "IT" | "PL" | "PT";

interface CountryFlagProps {
  code: CountryCode;
  className?: string;
  title?: string;
  size?: "sm" | "md" | "lg";
}

const FLAG_COMPONENTS = {
  US,
  CZ,
  ES,
  FR,
  DE,
  IT,
  PL,
  PT,
} as const;

const SIZE_CLASSES = {
  sm: "h-3 w-4",
  md: "h-4 w-5",
  lg: "h-6 w-8",
} as const;
export type { CountryFlagProps };

export const CountryFlag = ({
  code,
  className,
  title,
  size = "md",
}: CountryFlagProps) => {
  const FlagComponent = FLAG_COMPONENTS[code];

  if (!FlagComponent) {
    console.warn(`CountryFlag: Unsupported country code "${code}"`);
    return null;
  }

  return (
    <FlagComponent
      className={cn(SIZE_CLASSES[size], "rounded-xs", className)}
      title={title}
    />
  );
};
