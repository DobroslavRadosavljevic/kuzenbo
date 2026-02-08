"use client";

import type { ReactNode } from "react";

import { Toast as BaseToast } from "@base-ui/react/toast";

import { ToastClose } from "./toast-close";
import { ToastContent } from "./toast-content";
import { ToastDescription } from "./toast-description";
import { ToastPortal } from "./toast-portal";
import { ToastRoot } from "./toast-root";
import { ToastTitle } from "./toast-title";
import { ToastViewport } from "./toast-viewport";

export const ToastProvider = ({ children }: { children: ReactNode }) => (
  <BaseToast.Provider data-slot="toast">
    {children}
    <ToastPortal>
      <ToastViewport>
        <ToastList />
      </ToastViewport>
    </ToastPortal>
  </BaseToast.Provider>
);

const ToastList = () => {
  const { toasts } = BaseToast.useToastManager();

  return toasts.map((toast) => (
    <ToastRoot key={toast.id} toast={toast}>
      <ToastContent>
        <ToastTitle />
        <ToastDescription />
        <ToastClose />
      </ToastContent>
    </ToastRoot>
  ));
};
