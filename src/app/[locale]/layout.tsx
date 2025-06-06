import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {getTranslations} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import type {Metadata} from 'next';
import '@/app/globals.css';

export async function generateMetadata({
  params
}: {
   params: Promise<{locale: string}>;
}): Promise<Metadata> {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    description: t('description')
  };
}
 
export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
   params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className='flex-full'>
        <div className='card'>
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
