import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it } from "bun:test";

import { InputOTP } from "@/components/input-otp/input-otp";

afterEach(cleanup);

describe("InputOTP", () => {
  it("renders with slots", () => {
    render(
      <InputOTP maxLength={4}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
          <InputOTP.Slot index={3} />
        </InputOTP.Group>
      </InputOTP>
    );
    const slots = document.querySelectorAll("[data-slot=input-otp-slot]");
    expect(slots.length).toBe(4);
  });

  it("has data-slot on container", () => {
    render(
      <InputOTP maxLength={1}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
        </InputOTP.Group>
      </InputOTP>
    );
    expect(document.querySelector("[data-slot=input-otp]")).toBeDefined();
  });
});
