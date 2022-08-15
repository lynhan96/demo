import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_GLOBAL } from '@utils/constants';
import { ButtonAnt } from 'views/components/styled';
import { useTranslation } from 'next-i18next';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, NAMESPACE_GLOBAL)),
  },
});

export default function notfound() {
  const { t } = useTranslation('common');

  return (
    <div
      className='error-page vh-100 d-flex justify-content-center text-center'
      style={{ background: 'white' }}
    >
      <div className='my-auto'>
        <h2>404</h2>
        <p>{t('404.desc')}</p>
        <Link href='/'>
          <ButtonAnt
            icon={
              <i
                className='icon ion-md-home'
                style={{ marginRight: 10, fontSize: 18 }}
              />
            }
            style={{ margin: '0 auto' }}
          >
            {t('button.backToHome')}
          </ButtonAnt>
        </Link>
      </div>
    </div>
  );
}
