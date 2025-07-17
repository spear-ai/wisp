import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const environment = createEnv({
  client: {
    NEXT_PUBLIC_SENTRY_DSN: z.string().min(1),
    NEXT_PUBLIC_SENTRY_IS_ENABLED: z.stringbool().default(false),
  },
  runtimeEnv: {
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_IS_ENABLED: process.env.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  },
});
