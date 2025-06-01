"use client"
import {useTranslations} from 'next-intl';

const Header = () => {
  const t = useTranslations('Header');
  return (
    <header>
      <nav>
        <ul>
          <li className='text-red-600 pb-4'>
            {t('text')}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;