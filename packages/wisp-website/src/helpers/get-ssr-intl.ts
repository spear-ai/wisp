import memoize from "memoize";
import Negotiator from "negotiator";
import { headers } from "next/headers";
import { createIntl } from "react-intl";
import { intlCache } from "../messages/cache";
import { matchLocale, messagesByLocale } from "../messages/messages";

const supportedLocaleList = Object.keys(messagesByLocale);

export const getSsrIntl = memoize(async () => {
  const headersList = await headers();
  const negotiator = new Negotiator({
    headers: { "accept-language": headersList.get("accept-language") ?? "" },
  });
  const preferredLocaleList = negotiator.languages(supportedLocaleList);
  const timeZone = "Etc/UTC";
  const locale = matchLocale(preferredLocaleList);
  const messages = messagesByLocale[locale];
  return createIntl({ locale, messages, timeZone }, intlCache);
});
