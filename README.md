# kuzenbo

A modern React component library with 75+ components built on [@base-ui/react](https://base-ui.com/) primitives, styled with [Tailwind CSS v4](https://tailwindcss.com/) and [tailwind-variants](https://www.tailwind-variants.org/).

Combines the best design patterns from [shadcn/ui](https://ui.shadcn.com/), [HeroUI](https://www.heroui.com/), and [Mantine](https://mantine.dev/).

## Installation

```bash
npm install kuzenbo
```

### Peer Dependencies

React is required:

```bash
npm install react react-dom
```

Some components require additional peer dependencies. Install only what you need:

| Component   | Required packages                     |
| ----------- | ------------------------------------- |
| Calendar    | `react-day-picker`                    |
| Carousel    | `embla-carousel embla-carousel-react` |
| Chart       | `recharts`                            |
| Command     | `cmdk`                                |
| CountryFlag | `country-flag-icons`                  |
| Drawer      | `vaul`                                |
| Dropzone    | `react-dropzone`                      |
| EmojiPicker | `frimousse`                           |
| InputOTP    | `input-otp`                           |
| Marquee     | `react-fast-marquee`                  |
| QRCode      | `qrcode culori`                       |
| Resizable   | `react-resizable-panels`              |
| Textarea    | `react-textarea-autosize`             |
| VideoPlayer | `media-chrome`                        |

## Tailwind CSS v4 Setup

Kuzenbo requires Tailwind CSS v4. Add the following to your main CSS file:

```css
@import "tailwindcss";
@import "kuzenbo/styles.css";
@source "../node_modules/kuzenbo/dist";
```

- `@import "kuzenbo/styles.css"` registers the theme tokens (colors, radius) with Tailwind and provides default light/dark mode values
- `@source` tells Tailwind to scan the library's dist for utility classes

> The `@source` path is relative to your CSS file. Adjust if your CSS file is not at the project root.

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

### Component with optional peer dep

```bash
npm install react-day-picker
```

```tsx
import { Calendar } from "kuzenbo";

export default function App() {
  return <Calendar mode="single" />;
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

Avatar, Badge, Calendar, Carousel, Chart, CountryFlag, EmojiPicker, GoogleLogo, Kbd, Marquee, Pill, QRCode, Table, ThemeIcon, Timeline, VideoPlayer

### Actions

Affix, Button, ButtonGroup, Command, Toggle, ToggleGroup

### Typography

Anchor, Blockquote, Heading, InlineCode, Large, Lead, List, Muted, Paragraph, Small, SmallHeading, Text

### Utilities

Item, Portal

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
