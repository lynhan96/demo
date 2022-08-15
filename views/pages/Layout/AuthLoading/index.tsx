import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Cookie from 'js-cookie';

import { themes } from 'views/theme';
import { useAppState } from 'src/context/AppContext';

import { meQuery } from '@data/user';
import { handleMutate } from '@data/index';
import { AUTH_AB_CRYPT } from '@utils/constants';
import { PAGE_ROUTES, AUTH_ROUTES } from '@utils/routes';
import { Wrapper } from './styled';

const PrivateRoute: React.FC<any> = ({ children }) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);
  const { mutate } = meQuery();

  const { setUser, reloadSetting, setReloadSetting } = useAppState();

  useEffect(() => {
    onGetProfile();
  }, []);

  useEffect(() => {
    if (reloadSetting) onGetGlobalInfo();
  }, [reloadSetting]);

  const onGetProfile = () => {
    handleMutate(mutate, {
      onSuccess: ({ data }) => {
        setUser(data);
        setLoading(false);
        if (AUTH_ROUTES.includes(router.pathname))
          router.replace(PAGE_ROUTES.HOME);
      },
      onError: () => {
        setUser({});
        Cookie.remove(AUTH_AB_CRYPT);
        setLoading(false);
      },
    });
  };

  const onGetGlobalInfo = () => {
    onGetProfile();
    setReloadSetting(false);
  };

  return isLoading ? (
    <Wrapper>
      <ScaleLoader color={themes.dark.colors.primary} height={40} width={5} />
    </Wrapper>
  ) : (
    <>{children}</>
  );
};

export default PrivateRoute;
