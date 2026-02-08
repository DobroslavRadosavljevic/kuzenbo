import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";

export type ToastProps = ComponentProps<typeof BaseToast.Provider>;

export const Toast = (props: ToastProps) => (
  <BaseToast.Provider data-slot="toast" {...props} />
);

export { ToastAction, type ToastActionProps } from "./toast-action";
export { ToastClose, type ToastCloseProps } from "./toast-close";
export { ToastContent, type ToastContentProps } from "./toast-content";
export {
  ToastDescription,
  type ToastDescriptionProps,
} from "./toast-description";
export { ToastPortal, type ToastPortalProps } from "./toast-portal";
export { ToastRoot, type ToastRootProps } from "./toast-root";
export { ToastTitle, type ToastTitleProps } from "./toast-title";
export { ToastViewport, type ToastViewportProps } from "./toast-viewport";

// Re-export useToastManager hook
export const { useToastManager } = BaseToast;
export const { createToastManager } = BaseToast;

export { ToastProvider } from "./toast-provider";
// Export convenience hook
export { useToast } from "./use-toast";
