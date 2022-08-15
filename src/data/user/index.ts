import { useMutation } from 'react-query';
import http from '@utils/api/http';
import { API_ENDPOINTS } from '@utils/api/endpoints';

import {
  PreLoginParams,
  LoginParams,
  RegisterParams,
  ConfirmForgotParams,
  ForgotVerifyAccountParams,
  RegisterVerifyPhoneParams,
  ConfirmRegisterCodeParams,
} from './types';

export const preLoginQuery = () => {
  return useMutation((params: PreLoginParams) =>
    http.post(API_ENDPOINTS.USER.PRE_LOGIN, params)
  );
};

export const loginQuery = () => {
  return useMutation((params: LoginParams) =>
    http.post(API_ENDPOINTS.USER.LOGIN, params)
  );
};

export const meQuery = () => {
  return useMutation(() => http.get(API_ENDPOINTS.USER.ME));
};

export const registerQuery = () => {
  return useMutation((params: RegisterParams) =>
    http.post(API_ENDPOINTS.USER.REGISTER, params)
  );
};

export const forgotVerifyAccountQuery = () => {
  return useMutation((params: ForgotVerifyAccountParams) =>
    http.post(API_ENDPOINTS.USER.FORGOT_VERIFY_ACCOUNT, params)
  );
};

export const confirmForgotQuery = () => {
  return useMutation((params: ConfirmForgotParams) =>
    http.post(API_ENDPOINTS.USER.CONFIRM_FORGOT, params)
  );
};

export const registerVerifyPhoneQuery = () => {
  return useMutation((params: RegisterVerifyPhoneParams) =>
    http.post(API_ENDPOINTS.USER.REGISTER_VERIFY_PHONE, params)
  );
};

export const registerConfirmCodeQuery = () => {
  return useMutation((params: ConfirmRegisterCodeParams) =>
    http.post(API_ENDPOINTS.USER.REGISTER_CONFIRM_CODE, params)
  );
};
