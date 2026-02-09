import type { Meta } from "@storybook/react";

import { Dropzone } from "./dropzone";

const meta = {
  title: "Components/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
} satisfies Meta<typeof Dropzone>;

export default meta;

const handleDrop = (files: File[]) => {
  console.info("Dropped", files.length, "file(s)");
};

export const Default = {
  render: () => (
    <Dropzone onDrop={handleDrop} className="w-64">
      <p className="text-center text-sm text-muted-foreground">
        Drop files here or click to browse
      </p>
    </Dropzone>
  ),
};
