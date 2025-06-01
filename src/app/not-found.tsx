import {NextIntlClientProvider, useMessages} from 'next-intl';
import NotFoundClient from '@/components/NotFoundClient';
import './globals.css';

export default function NotFound() {
  const messages = useMessages();

  return(
    <NextIntlClientProvider messages={messages}>
      <NotFoundClient />
    </NextIntlClientProvider>
  );
}