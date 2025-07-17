import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Source_Code_Pro, Work_Sans } from "next/font/google";
import { getLangDir } from "rtl-detect";
import { getSsrIntl } from "@/helpers/get-ssr-intl";
import { AppProviders } from "./providers";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
});

export const generateMetadata = async (): Promise<Metadata> => {
  const intl = await getSsrIntl();

  return {
    description: intl.formatMessage({
      defaultMessage:
        "Linux distribution for developers with good taste. Made by the team at Spear AI who think secure air-gapped environments don’t have to be boring.",
      id: "W5jKaV",
    }),
    title: "Wisp",
  };
};

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const intl = await getSsrIntl();
  const { locale } = intl;
  const localeDirection = getLangDir(locale);

  return (
    <html dir={localeDirection} lang={locale}>
      <body
        className={`${sourceCodePro.variable} ${workSans.variable} antialiased bg-neutral-950 font-sans relative selection:bg-accent-200 selection:text-black text-neutral-100`}
      >
        <AppProviders locale={locale} localeDirection={localeDirection}>
          {children}
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
};

export default RootLayout;
