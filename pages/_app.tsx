import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import Cookie from 'js-cookie';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { appWithTranslation } from 'next-i18next';

import 'antd/dist/antd.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from 'views/pages/Layout';
import AuthLoading from 'views/pages/Layout/AuthLoading';
import AppContext, {
  defaultLocaleSetting,
  defaultUser,
} from 'src/context/AppContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<any>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  const [isDark, setDark] = useState(
    String(Cookie.get('THEME_DARK_MODE')) === 'true'
  );
  const [user, setUser] = useState(defaultUser);
  const [reloadSetting, setReloadSetting] = useState(false);
  const [localeSetting, setLocaleSetting] = useState(defaultLocaleSetting);

  useEffect(() => {
    const currency = Cookie.get('currency') || 'tether';
    const lang = Cookie.get('lang') || 'en';

    axios
      .get(`https://api.coincap.io/v2/rates/${currency}`)
      .then(({ data: { data } }) => {
        setLocaleSetting((state) => ({ ...state, rate: data.rateUsd }));
      });

    setLocaleSetting({
      lang,
      currency,
      rate: 1,
    });
  }, []);

  return (
    <>
      <Head>
        <title>Piex | Buy & sell Crypto in minutes</title>
        <meta name='description' content='Buy & sell Crypto in minutes' />
        <link rel='icon' href='/favicon.ico' />
        <link
          href='https://fonts.googleapis.com/icon?family=Material+Icons'
          rel='stylesheet'
        />
        <script src='/tradingview/datafeeds/udf/dist/bundle.js' />
        <script src='/tradingview/charting_library/charting_library.standalone.js' />
      </Head>
      <QueryClientProvider client={queryClientRef.current}>
        <AppContext.Provider
          value={{
            localeSetting,
            setLocaleSetting,
            setReloadSetting,
            reloadSetting,
            user,
            setUser,
            isDark,
            switchTheme: setDark,
          }}
        >
          <AuthLoading>
            <Layout>
              <Component {...pageProps} theme={isDark ? 'dark' : 'light'} />
            </Layout>
          </AuthLoading>
        </AppContext.Provider>
      </QueryClientProvider>
    </>
  );
};

export default appWithTranslation(MyApp);
