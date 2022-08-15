import React from 'react';
import _map from 'lodash/map';
import Cookies from 'js-cookie';
import Router from 'next/router';

import LogoutIcon from '@mui/icons-material/Logout';

import { AUTH_AB_CRYPT, KYC_STATUS } from '@utils/constants';
import { PAGE_ROUTES } from '@utils/routes';
import { useAppState } from 'src/context/AppContext';
import { hideEndString } from '@utils/function';

import {
  StyledWrapMenuDynamic,
  AccountInfo,
  DropDownText,
  DropdownItem,
  StyledDivider,
  VerifyStatus,
  VerifyStatusWrapper,
} from './styled';
import { useTranslation } from 'react-i18next';

type ItemType = {
  link: string;
  label: string;
  icon: any;
};

export const View = () => {
  const { user, setUser } = useAppState();
  const { t } = useTranslation('header');

  const onLogout = () => {
    Cookies.remove(AUTH_AB_CRYPT);
    Router.push(PAGE_ROUTES.HOME);
    setUser({});
  };

  return (
    <StyledWrapMenuDynamic style={{ padding: '10px 0' }}>
      <AccountInfo>
        {hideEndString(user?.email || user?.phoneNumber, 'email')}
      </AccountInfo>
      <VerifyStatusWrapper>
        <VerifyStatus
          isVerified={user.identityVerificationStatus === KYC_STATUS.VERIFIED}
        >
          {user?.identityVerificationStatus === KYC_STATUS.VERIFIED
            ? t('status.verified')
            : t('status.notVerified')}
        </VerifyStatus>
      </VerifyStatusWrapper>

      <StyledDivider />
      <DropdownItem onClick={onLogout} style={{ margin: '0 10px' }}>
        <LogoutIcon />

        <DropDownText>{t('subMenu.account.logout')}</DropDownText>
      </DropdownItem>
    </StyledWrapMenuDynamic>
  );
};

export default View;
