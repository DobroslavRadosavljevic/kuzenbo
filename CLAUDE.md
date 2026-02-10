# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Kuzenbo is a React UI component library (75+ components) built on `@base-ui/react` primitives, styled with Tailwind CSS v4 and `tailwind-variants`.

## Commands

```bash
bun run build        # Build with tsdown
bun run dev          # Build in watch mode
bun run lint         # Lint (ultracite check = oxlint + oxfmt)
bun run format       # Auto-fix lint/format (ultracite fix)
bun run typecheck    # tsc --noEmit
bun test             # Run all tests (bun test runner + happy-dom)
bun test --filter "Button"  # Run a single test by name
bun run quality      # Run lint + typecheck + build + test (quality gate)
```

**Do not use biome, eslint, or prettier directly.** Linting and formatting are handled exclusively by `ultracite` (wrapping `oxlint` + `oxfmt`).

## Formatting Rules

Configured in `.oxfmtrc.jsonc`: 80 char print width, 2 spaces, double quotes, semicolons, trailing comma es5, LF line endings. Imports are auto-sorted ascending with newlines between groups.

## Architecture

### Entry Point

`src/index.tsx` — exports all 75+ components, hooks, and utilities from `src/components/` and `src/hooks/`.

### Component Structure

Each component lives in `src/components/<name>/` with the root file at `<name>.tsx`. Multi-part components have sub-components in separate files: `<name>-<sub>.tsx`.

### Compound Component Pattern

All multi-part components follow this exact pattern (see `input-group.tsx`, `select.tsx`):

```tsx
"use client";
import type { ComponentProps } from "react";
import { SubOne } from "./parent-sub-one";
import { SubTwo } from "./parent-sub-two";

const Parent = ({ className, ...props }: ComponentProps<"div">) => (
  <div className={cn(...)} data-slot="parent" {...props} />
);

Parent.SubOne = SubOne;
Parent.SubTwo = SubTwo;

export { Parent, SubOne, SubTwo };
```

Key rules:

1. Root component defined with `const` (not `export const`)
2. Sub-components attached via dot notation: `Parent.Child = ParentChild`
3. Single `export {}` block at the bottom
4. `export type` statements kept separate from the value export block
5. Hooks, variants, and context are **not** attached as compound props

### Styling

- `tailwind-variants` for all component styling (`cn` utility, `tv()` for variant definitions)
- Tailwind CSS v4 (configured via `@tailwindcss/postcss`, no tailwind.config.js)
- All components use `data-slot="component-name"` attributes
- Dark mode via `dark:` variants
- Accessibility via `aria-*` attributes and semantic HTML

### Generic Components

`Select`, `Combobox`, and `Autocomplete` are generic TypeScript components parameterized on `Value` (and sometimes `Multiple`).

### Testing

Tests live in `tests/` using bun's test runner with `@testing-library/react` and `@testing-library/user-event`. Happy-dom is preloaded via `tests/setup.ts`. Path alias `@/` maps to `src/`.

### Git Conventions

Conventional commits enforced by commitlint + husky (max 200 char header/body). Pre-commit hook runs lint-staged with `ultracite fix`.

## Key Dependencies

- **@base-ui/react** — headless UI primitives (Select, Dialog, Popover, Tooltip, etc.)
- **tailwind-variants** — variant-based styling with `tv()` and `cn()`
- **@hugeicons/react** + **@hugeicons/core-free-icons** — icon system
- **embla-carousel** — carousel, **react-day-picker** — calendar, **cmdk** — command palette
- **vaul** — drawer, **motion** — animations, **recharts** — charts
- **@tanstack/react-table** + **@tanstack/react-virtual** — table with virtualization

## Requirements

- Bun 1.3.6+
- Node.js 22+
- React 18+ or 19+

<!-- opensrc:start -->

## Source Code Reference

Source code for dependencies is available in `opensrc/` for deeper understanding of implementation details.

See `opensrc/sources.json` for the list of available packages and their versions.

Use this source code when you need to understand how a package works internally, not just its types/interface.

### Fetching Additional Source Code

To fetch source code for a package or repository you need to understand, run:

```bash
npx opensrc <package>           # npm package (e.g., npx opensrc zod)
npx opensrc pypi:<package>      # Python package (e.g., npx opensrc pypi:requests)
npx opensrc crates:<package>    # Rust crate (e.g., npx opensrc crates:serde)
npx opensrc <owner>/<repo>      # GitHub repo (e.g., npx opensrc vercel/ai)
```

<!-- opensrc:end -->
