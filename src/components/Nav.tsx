'use client';

import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/services/locale';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Nav() {
  const t = useTranslations("Nav");

  function onChange(value: string) {
    const locale = value as Locale;
    setUserLocale(locale);
  }

  return (
    <div className="flex gap-6 text-sm">
      <Link href="/" className="">
        {t("home")}
      </Link>
      <Link href="/blogs" className="">
        {t("blogs")}
      </Link>
      <a href='#' className="flex items-center gap-1" onClick={() => onChange(t("switchLanguageLocale"))}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
        </svg>
        {t("switchLanguage")}
      </a>
    </div>
  );
}
