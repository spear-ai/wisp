"use client";

import { ReactNode } from "react";
import { IntlProvider } from "react-intl";
import { messagesByLocale } from "@/messages/messages";

export const AppProviders = (properties: {
  children: ReactNode;
  locale: string;
  localeDirection: "ltr" | "rtl";
}) => {
  const { children, locale } = properties;
  const messages = messagesByLocale[locale as keyof typeof messagesByLocale];

  return (
    <IntlProvider locale={locale} messages={messages}>
      {children}
    </IntlProvider>
  );
};
