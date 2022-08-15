import React from 'react';
import LoginView from 'views/pages/Auth/Login';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NAMESPACE_GLOBAL } from '@utils/constants';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, NAMESPACE_GLOBAL.concat['auth'])),
  },
});

const Login = () => {
  return <LoginView />;
};

export default Login;
