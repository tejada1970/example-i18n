'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function NotFoundClient() {
  const pathname = usePathname();
  const locale = pathname?.split('/')[1] || 'en';
  const t = useTranslations('NotFound');

  return (
    <div className='flex-full'>
      <div className='card'>
        <h2>{t('title')}</h2>
        <Link href={`/${locale}`} className='text-white shadow-md shadow-slate-700 bg-black p-2 rounded text-sm'>
          {t('back')}
        </Link>
      </div>
    </div>
  );
}
