import React from 'react';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_GLOBAL } from '@utils/constants';
import { ButtonAnt, Text } from 'views/components/styled';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import { themes } from 'views/theme';
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
        <SyncLockIcon
          style={{ color: themes.dark.colors.primary, fontSize: '200px' }}
        />
        <Text fs='60px' fw='500'>
          {t('comingSoon.title')}
        </Text>
        <Text secondary ma='8px 0 0 0px' pa='0 8px'>
          {t('comingSoon.desc1')}
        </Text>
        <Text secondary ma='0 0 32px' pa='0 8px'>
          {t('comingSoon.desc2')}
        </Text>
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
