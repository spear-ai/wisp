import { match } from "@formatjs/intl-localematcher";
import enUS from "./__generated__/compiled/en-us.json";

export const messagesByLocale = {
  en: enUS,
  "en-US": enUS,
};

export const availableLocaleList = Object.keys(messagesByLocale);

export const defaultLocale = "en-US";

export const matchLocale = (preferredLocaleList: string[]) =>
  match(
    preferredLocaleList,
    availableLocaleList,
    defaultLocale,
  ) as keyof typeof messagesByLocale;
