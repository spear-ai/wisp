import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import { z } from "zod";

export const environment = createEnv({
  client: {
    NEXT_PUBLIC_SENTRY_DSN: z
      .string()
      .trim()
      .nullish()
      .transform((value) => value ?? ""),
    NEXT_PUBLIC_SENTRY_IS_ENABLED: z
      .enum(["", "false", "true", "false"])
      .nullish()
      .transform((value) => value === "true"),
  },
  createFinalSchema: (shape) =>
    z.object(shape).transform((environment_, context) => {
      if (
        environment_.NEXT_PUBLIC_SENTRY_IS_ENABLED &&
        environment_.NEXT_PUBLIC_SENTRY_DSN === ""
      ) {
        context.addIssue({
          code: "custom",
          message:
            "`NEXT_PUBLIC_SENTRY_DSN` is required when `NEXT_PUBLIC_SENTRY_IS_ENABLED` is true.",
        });

        return z.NEVER;
      }

      return environment_;
    }),
  extends: [vercel()],
  runtimeEnv: {
    CI: process.env.CI,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_IS_ENABLED: process.env.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  },
  server: {
    CI: z
      .string()
      .trim()
      .nullish()
      .transform(
        (value) => (value === "" || value == null ? "false" : "true") as string
      )
      .pipe(z.stringbool()),
  },
});
