# kuzenbo

A modern React component library with 75+ components built on [@base-ui/react](https://base-ui.com/) primitives, styled with [Tailwind CSS v4](https://tailwindcss.com/) and [tailwind-variants](https://www.tailwind-variants.org/).

Combines the best design patterns from [shadcn/ui](https://ui.shadcn.com/), [HeroUI](https://www.heroui.com/), and [Mantine](https://mantine.dev/).

## Installation

```bash
npm install kuzenbo
# or
pnpm add kuzenbo
# or
yarn add kuzenbo
# or
bun add kuzenbo
```

## Tailwind CSS v4 Setup

Kuzenbo requires Tailwind CSS v4. Add the following to your main CSS file:

```css
@import "tailwindcss";
@import "kuzenbo/styles.css";
@source "../node_modules/kuzenbo/dist";
```

**Two directives, different resolution:**

- **`@import "kuzenbo/styles.css"`** — Uses a package specifier. Your bundler (Vite, webpack, etc.) resolves it from `node_modules`, so no path adjustment needed. This pulls in theme tokens (colors, radius) and default light/dark mode values.
- **`@source "../node_modules/kuzenbo/dist"`** — Uses a filesystem path. Tailwind's content scanner does not resolve package names; it expects a path relative to the CSS file. This tells Tailwind where to scan for utility classes.

**Path adjustment:** The `@source` path is relative to your main CSS file. Examples:

| CSS file location  | `@source` path                    |
| ------------------ | --------------------------------- |
| `src/app.css`      | `../node_modules/kuzenbo/dist`    |
| `app/globals.css`  | `../node_modules/kuzenbo/dist`    |
| `styles/index.css` | `../../node_modules/kuzenbo/dist` |

With **pnpm**, you may need the explicit dist path (e.g. `../node_modules/kuzenbo/dist`) rather than just `../node_modules/kuzenbo` due to symlinks.

### Customizing the theme

The default theme uses the shadcn/ui zinc palette. Override any token by redefining its CSS variable:

```css
:root {
  --primary: oklch(0.6 0.25 260);
  --radius: 0.5rem;
}
```

## Usage

### Simple component

```tsx
import { Button } from "kuzenbo";

export default function App() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

### CSP Provider

Re-exported from Base UI — [docs](https://base-ui.com/react/utils/csp-provider). For apps enforcing strict Content Security Policy, wrap your app with `CSPProvider`:

```tsx
import { CSPProvider, Button } from "kuzenbo";

function App({ nonce }: { nonce?: string }) {
  return (
    <CSPProvider nonce={nonce}>
      <Button>Click me</Button>
    </CSPProvider>
  );
}
```

Or use `disableStyleElements` to avoid inline `<style>` tags (rely on external CSS instead).

### Direction Provider

Re-exported from Base UI — [docs](https://base-ui.com/react/utils/direction-provider). For RTL support, wrap your app with `DirectionProvider` (also set `dir="rtl"` on a parent):

```tsx
import { DirectionProvider, Slider } from "kuzenbo";

export default function RTLExample() {
  return (
    <div dir="rtl">
      <DirectionProvider direction="rtl">
        <Slider defaultValue={25} />
      </DirectionProvider>
    </div>
  );
}
```

### mergeProps

Re-exported from Base UI — [docs](https://base-ui.com/react/utils/merge-props). Merges multiple prop objects (e.g. internal + user props). Rightmost wins for most keys; `className` is concatenated; event handlers run in order (rightmost first):

```tsx
import { mergeProps } from "kuzenbo";

// In a render callback or custom component
<button
  {...mergeProps<"button">(
    { className: "base", onClick: handlerA },
    { className: "override", onClick: handlerB }
  )}
/>;
// Result: className="override base", both onClick handlers run (handlerB first)
```

Call `event.preventBaseUIHandler()` in handlers to skip Base UI's internal logic.

### useRender

Re-exported from Base UI — [docs](https://base-ui.com/react/utils/use-render). Hook for building custom components with a `render` prop (alternative to `asChild`):

```tsx
import { useRender, mergeProps } from "kuzenbo";

function Text({ render, ...props }) {
  return useRender({
    defaultTagName: "p",
    render,
    props: mergeProps<"p">({ className: "text-base" }, props),
  });
}

// Usage
<Text>Default paragraph</Text>
<Text render={<strong />}>Rendered as strong</Text>
```

### Compound component (dot notation)

```tsx
import { Dialog } from "kuzenbo";

export default function App() {
  return (
    <Dialog>
      <Dialog.Trigger>Open</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay />
        <Dialog.Content>
          <Dialog.Header>
            <Dialog.Title>Title</Dialog.Title>
            <Dialog.Description>Description</Dialog.Description>
          </Dialog.Header>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}
```

## Components

### Layout

Accordion, AspectRatio, Card, Collapsible, Empty, Resizable, ScrollArea, Separator, Spacer, Surface

### Forms

Autocomplete, Checkbox, CheckboxGroup, Combobox, Dropzone, FormField, Input, InputGroup, InputOTP, Label, NumberField, RadioGroup, Select, Slider, Switch, Textarea

### Navigation

Breadcrumb, Menubar, NavigationMenu, Pagination, Sidebar, Tabs, Toolbar

### Feedback

Alert, AlertDialog, Announcement, Meter, Progress, Rating, Skeleton, Spinner, Toast, Tooltip

### Overlay

Dialog, Drawer, DropdownMenu, ContextMenu, HoverCard, Popover, Sheet

### Data Display

Avatar, Badge, Calendar, Carousel, Chart, ColorSwatch, CountryFlag, EmojiPicker, GoogleLogo, Kbd, Marquee, Pill, QRCode, Table, ThemeIcon, Timeline, VideoPlayer

ColorSwatch gradient migration: use a semantic solid `color` and pass gradients
via `background`.

### Actions

Affix, Button, ButtonGroup, Command, Toggle, ToggleGroup

### Utilities

Item, Portal, CSPProvider, DirectionProvider, mergeProps, useRender

_CSPProvider, DirectionProvider, mergeProps, and useRender are re-exports from [@base-ui/react](https://base-ui.com/) — [CSP Provider](https://base-ui.com/react/utils/csp-provider) · [Direction Provider](https://base-ui.com/react/utils/direction-provider) · [mergeProps](https://base-ui.com/react/utils/merge-props) · [useRender](https://base-ui.com/react/utils/use-render)._

## AI Skill (skills.sh)

This repository includes a reusable agent skill at [`SKILL.md`](./SKILL.md)
for integrating and theming Kuzenbo in application codebases.

Install it with the Skills CLI:

```bash
npx skills add https://github.com/DobroslavRadosavljevic/kuzenbo --skill using-kuzenbo-in-apps
```

You can also install by repository shorthand:

```bash
npx skills add DobroslavRadosavljevic/kuzenbo
```

## Development

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `bun run build`     | Build the package                   |
| `bun run dev`       | Build in watch mode                 |
| `bun run test`      | Run tests                           |
| `bun run lint`      | Check linting and formatting        |
| `bun run format`    | Auto-fix lint/format issues         |
| `bun run typecheck` | Run TypeScript type checking        |
| `bun run bump`      | Bump version and generate changelog |

### Requirements

- **Bun** 1.3.6+
- **Node.js** 22+

### Git Hooks

- **pre-commit**: Runs `lint-staged` to lint and format staged files
- **commit-msg**: Validates [Conventional Commits](https://www.conventionalcommits.org/) format

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## License

MIT
