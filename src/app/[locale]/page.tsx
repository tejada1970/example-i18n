import {useTranslations, NextIntlClientProvider, useMessages} from 'next-intl';
import Header from '@/components/Header';

export default function Home() {
  const t = useTranslations('Home');
  const messages = useMessages();

  return (
    <div>
      <NextIntlClientProvider messages={messages}>
        <Header />
      </NextIntlClientProvider>
      <h1>{t('text')}</h1>
    </div>
  );
}
