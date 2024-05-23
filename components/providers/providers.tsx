"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { CustomPostHogProvider } from "./posthog-provider";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <CustomPostHogProvider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </CustomPostHogProvider>
  );
}
