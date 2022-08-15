import React from 'react';
import ForgotPassword from 'views/pages/Auth/ForgetPassword';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_GLOBAL } from '@utils/constants';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, NAMESPACE_GLOBAL.concat['auth'])),
  },
});

export default function Forget() {
  return <ForgotPassword />;
}
