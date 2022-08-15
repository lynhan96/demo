import { createContext, useContext, Dispatch } from 'react';
import { ThemeContext } from 'styled-components';

type appContextType = {
  isDark: boolean;
  switchTheme: Dispatch<boolean>;
  reloadSetting: boolean;
  setReloadSetting: Dispatch<boolean>;
  user: {
    id: string;
    userId: string;
    email: string;
    phoneNumber: string;
    identityVerificationStatus: string;
    isWhiteLabel: boolean;
    refRate: number;
  };
  localeSetting: {
    lang: string;
    currency: string;
    rate: number;
  };
  setLocaleSetting: Dispatch<Object>;
  setUser: Dispatch<Object>;
};

export const defaultUser = {
  id: '',
  userId: '',
  email: '',
  phoneNumber: '',
  identityVerificationStatus: '',
  isWhiteLabel: false,
  refRate: 0,
};

export const defaultSetting = {
  isTwoFactorAuthentication: false,
  isEmailAuthentication: false,
  isPhoneAuthentication: false,
  isEmailConfirmed: false,
  isPhoneConfirmed: false,
  isActive: false,
  antiPhishingCode: '',
  isEnableFundPassword: false,
  isWithdrawalWhitelist: false,
  twoFactorCode: '',
};

export const defaultLocaleSetting = {
  lang: 'en',
  currency: 'usd',
  rate: 1,
};

const appContextDefaultValues: appContextType = {
  isDark: true,
  switchTheme: () => {},
  user: defaultUser,
  localeSetting: defaultLocaleSetting,
  setLocaleSetting: () => {},
  reloadSetting: false,
  setReloadSetting: () => {},
  setUser: () => {},
};

const AppContext = createContext<appContextType>(appContextDefaultValues);

export function useAppState() {
  return useContext(AppContext);
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default AppContext;
