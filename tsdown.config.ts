import { readdirSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "tsdown";

const componentsDir = resolve(import.meta.dirname, "src/components");
const componentEntries = Object.fromEntries(
  readdirSync(componentsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => [`ui/${d.name}`, `./src/components/${d.name}/${d.name}.tsx`])
);

const hooksDir = resolve(import.meta.dirname, "src/hooks");
const hookEntries = Object.fromEntries(
  readdirSync(hooksDir)
    .filter((f) => f.endsWith(".ts") && !f.includes(".test."))
    .map((f) => [`hooks/${f.replace(".ts", "")}`, `./src/hooks/${f}`])
);

export default defineConfig({
  entry: {
    index: "./src/index.tsx",
    ...componentEntries,
    ...hookEntries,
  },
  platform: "neutral",
  external: [
    "react",
    "react-dom",
    "@base-ui/react",
    "@hugeicons/core-free-icons",
    "@hugeicons/react",
    "tailwind-variants",
    "cmdk",
    "country-flag-icons",
    "culori",
    "embla-carousel",
    "embla-carousel-react",
    "frimousse",
    "input-otp",
    "media-chrome",
    "qrcode",
    "react-day-picker",
    "react-dropzone",
    "react-fast-marquee",
    "react-resizable-panels",
    "react-textarea-autosize",
    "recharts",
    "vaul",
  ],
  dts: true,
  format: ["esm"],
  clean: true,
});
