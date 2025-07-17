import * as Sentry from "@sentry/nextjs";
import { environment } from "@/environment";

Sentry.init({
  debug: false,
  dsn: environment.NEXT_PUBLIC_SENTRY_DSN,
  enabled: environment.NEXT_PUBLIC_SENTRY_IS_ENABLED,
  tracesSampleRate: 1,
});
