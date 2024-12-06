"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { CheckCircle2 } from "lucide-react";

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="relative overflow-hidden rounded-lg border border-emerald-300 bg-emerald-100 dark:bg-emerald-950/20 dark:border-emerald-800/30 p-4 shadow-sm">
            <div className="flex gap-2">
              <div className="rounded-full bg-emerald-200 dark:bg-emerald-900/50 p-1">
                <CheckCircle2 className="h-10 w-10 text-emerald-700 dark:text-emerald-400" />
              </div>
              <div className="flex flex-col">
                {title && <ToastTitle className="text-sm body-bold text-emerald-900 dark:text-emerald-200">{title}</ToastTitle>}
                {description && (
                  <ToastDescription className="text-sm body text-emerald-900 dark:text-emerald-200">{description}</ToastDescription>
                )}
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
