import clsx from 'clsx';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({subsets: ['arabic'], weight: ['400', '500', '600', '700']});

type Props = {
  children: ReactNode;
};

export default async function LocaleLayout({children}: Props) {
  const locale = await getLocale();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <title>next-intl example</title>
      </head>
      <body
        className={clsx(
          'flex flex-col bg-slate-100 p-8 text-gray-500 max-w-2xl',
          ibmPlexSansArabic.className
        )}
      >
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
