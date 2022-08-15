import {
  LoginParams,
  RegisterParams,
  ConfirmRegisterCodeParams,
  RegisterVerifyPhoneParams,
  PreLoginParams,
  ConfirmForgotParams,
  ForgotVerifyAccountParams,
} from './user/types';
import {
  SendVerifyEmailParams,
  SendVerifyPhoneParams,
  SendCodeParams,
} from './verify-code/types';

type UserQueryParams =
  | LoginParams
  | RegisterParams
  | RegisterVerifyPhoneParams
  | PreLoginParams
  | ConfirmRegisterCodeParams
  | ConfirmForgotParams
  | ForgotVerifyAccountParams;

type VerifyCodeQuery =
  | SendVerifyEmailParams
  | SendVerifyPhoneParams
  | SendCodeParams;

export type QueryPrams =
  | VerifyCodeQuery
  | UserQueryParams
  | PaginationHistory
  | PaginationParamsV2;

export enum InternalTransferFilterType {
  SEND = 'SEND',
  RECEIVER = 'RECEIVER',
}

export type PaginationHistory = {
  page?: number;
  limit?: number;
  pageSize?: number;
  sort?: string;
};

export type PaginationResponse = {
  page?: number;
  limit?: number;
  pageSize?: number;
  sort?: string;
};

export type PaginationResponseV2<T> = {
  docs: T[];
  totalDocs?: number;
  limit?: number;
  hasPrevPage?: boolean;
  hasNextPage?: boolean;
  page?: number | undefined;
  totalPages?: number;
  offset?: number;
  prevPage?: number | null | undefined;
  nextPage?: number | null | undefined;
  pagingCounter?: number;
  meta?: any;
};

export type PaginationParamsV2 = {
  filter?: any;
  status?: string;
  txId?: string;
  token?: string;
  type?: InternalTransferFilterType;
  timeRange?: string;
  sort: object;
  limit: number;
  page: number;
};
