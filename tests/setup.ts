import { GlobalRegistrator } from "@happy-dom/global-registrator";
import "@react-aria/interactions";

GlobalRegistrator.register();

let prefersReducedMotion = false;
const originalMatchMedia = window.matchMedia.bind(window);

const createReducedMotionMediaQuery = (
  mediaQueryList: MediaQueryList
): MediaQueryList =>
  new Proxy(mediaQueryList, {
    get: (target, property, receiver) => {
      if (property === "matches") {
        return prefersReducedMotion;
      }
      return Reflect.get(target, property, receiver);
    },
  });

Object.defineProperty(window, "matchMedia", {
  configurable: true,
  value: (query: string) => {
    const mediaQueryList = originalMatchMedia(query);

    if (!query.includes("prefers-reduced-motion")) {
      return mediaQueryList;
    }

    return createReducedMotionMediaQuery(mediaQueryList);
  },
  writable: true,
});

Object.defineProperty(globalThis, "__setReducedMotion", {
  configurable: true,
  value: (value: boolean) => {
    prefersReducedMotion = value;
  },
  writable: true,
});
