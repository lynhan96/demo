export type LoginParams = {
  account: string;
  isEmail: boolean;
  password: string;
  emailCode: string;
  phoneCode: string;
  twoFactorCode: string;
};

export type PreLoginParams = {
  account: string;
  isEmail: boolean;
  password: string;
  recaptchaToken: string;
};

export type RegisterParams = {
  email: string;
  emailCode: string;
  password: string;
  referralCode: string;
};

export type RegisterVerifyPhoneParams = {
  userId: string;
  phoneNumber: string;
  phoneCode: string;
};

export type ConfirmRegisterCodeParams = {
  email: string;
  phoneNumber: string;
  code: number;
};

export type ConfirmForgotParams = {
  code: string;
  password: string;
  account: string;
  isEmail: boolean;
};

export type ForgotVerifyAccountParams = {
  account: string;
  isEmail: boolean;
};
