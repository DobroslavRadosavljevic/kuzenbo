import type { ComponentProps } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";

import { ToastAction } from "./toast-action";
import { ToastClose } from "./toast-close";
import { ToastContent } from "./toast-content";
import { ToastDescription } from "./toast-description";
import { ToastPortal } from "./toast-portal";
import { ToastProvider } from "./toast-provider";
import { ToastRoot } from "./toast-root";
import { ToastTitle } from "./toast-title";
import { ToastViewport } from "./toast-viewport";
import { useToast } from "./use-toast";

export type ToastProps = ComponentProps<typeof BaseToast.Provider>;

const Toast = (props: ToastProps) => (
  <BaseToast.Provider data-slot="toast" {...props} />
);

Toast.Action = ToastAction;
Toast.Close = ToastClose;
Toast.Content = ToastContent;
Toast.Description = ToastDescription;
Toast.Portal = ToastPortal;
Toast.Root = ToastRoot;
Toast.Title = ToastTitle;
Toast.Viewport = ToastViewport;
Toast.Provider = ToastProvider;

// Re-export useToastManager hook
export const { useToastManager } = BaseToast;
export const { createToastManager } = BaseToast;

export type { ToastActionProps } from "./toast-action";
export type { ToastCloseProps } from "./toast-close";
export type { ToastContentProps } from "./toast-content";
export type { ToastDescriptionProps } from "./toast-description";
export type { ToastPortalProps } from "./toast-portal";
export type { ToastRootProps } from "./toast-root";
export type { ToastTitleProps } from "./toast-title";
export type { ToastViewportProps } from "./toast-viewport";

export {
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastRoot,
  ToastTitle,
  ToastViewport,
  ToastProvider,
  useToast,
};
