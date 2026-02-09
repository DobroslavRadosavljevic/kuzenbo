import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { EmojiPicker } from "@/components/emoji-picker/emoji-picker";

afterEach(cleanup);

describe("EmojiPicker", () => {
  it("renders without crashing", () => {
    const { container } = render(<EmojiPicker />);
    expect(container.firstChild).toBeDefined();
  });

  it("has data-slot on root", () => {
    const { container } = render(<EmojiPicker />);
    expect(container.querySelector("[data-slot=emoji-picker]")).toBeDefined();
  });
});
