import { API_ENDPOINTS } from '@utils/api/endpoints';
import http from '@utils/api/http';
import { useMutation } from 'react-query';
import {
  SendVerifyEmailParams,
  SendVerifyPhoneParams,
  SendCodeParams,
} from './types';

export const sendVerifyEmailQuery = () => {
  return useMutation((params: SendVerifyEmailParams) =>
    http.post(API_ENDPOINTS.VERIFY_CODE.SEND_CODE_EMAIL, params)
  );
};

export const sendVerifyPhoneQuery = () => {
  return useMutation((params: SendVerifyPhoneParams) =>
    http.post(API_ENDPOINTS.VERIFY_CODE.SEND_CODE_PHONE, params)
  );
};

export const sendUnauthorizeCodeQuery = () => {
  return useMutation((params: SendCodeParams) =>
    http.post(API_ENDPOINTS.VERIFY_CODE.SEND_CODE_UNAUTHORIZE, params)
  );
};

export const sendCodeQuery = () => {
  return useMutation((params: SendCodeParams) =>
    http.post(API_ENDPOINTS.VERIFY_CODE.SEND_CONFIRM_CODE, params)
  );
};
