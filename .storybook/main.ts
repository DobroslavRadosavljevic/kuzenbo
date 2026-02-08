import type { StorybookConfig } from "@storybook/react-vite";

import tailwindcss from "@tailwindcss/postcss";
import path from "node:path";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-themes"],
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    config.css = config.css || {};
    config.css.postcss = {
      plugins: [tailwindcss()],
    };
    return config;
  },
};

export default config;
