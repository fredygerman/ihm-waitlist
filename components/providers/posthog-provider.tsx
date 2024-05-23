"use client";

import { env } from "@/env.mjs";
import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";
import { devConfig } from "@/config/site";

export function CustomPostHogProvider({ children }: any) {
  const { PosthogEnabled } = devConfig;
  console.log({ PosthogEnabled });

  if (
    env.NEXT_PUBLIC_VERCEL_ENV !== "production" ||
    !env.NEXT_PUBLIC_POSTHOG_KEY ||
    !PosthogEnabled
  ) {
    return <>{children}</>;
  }

  if (typeof window !== "undefined") {
    posthog.init(env.NEXT_PUBLIC_POSTHOG_KEY || "", {
      api_host: env.NEXT_PUBLIC_POSTHOG_HOST || "https://app.posthog.com",
    });
  }

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}
