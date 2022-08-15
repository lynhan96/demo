export type ActionEmailType =
  | 'register-email'
  | 'forgot-password-email'
  | 'update-email-email';

export type ActionPhoneType =
  | 'register-phone'
  | 'forgot-password-phone'
  | 'update-phone-number-phone';

export type SendCodeType =
  | 'sign-in-email'
  | 'sign-in-phone'
  | 'change-email-authentication-email'
  | 'change-email-authentication-phone'
  | 'change-phone-authentication-email'
  | 'change-phone-authentication-phone'
  | 'change-2fa-authentication-email'
  | 'change-2fa-authentication-phone'
  | 'disable-withdraw-whitelist-email'
  | 'disable-withdraw-whitelist-phone'
  | 'enable-withdraw-whitelist-email'
  | 'enable-withdraw-whitelist-phone'
  | 'update-phone-number-phone'
  | 'update-phone-number-email'
  | 'set-anti-phishing-code-email'
  | 'set-anti-phishing-code-phone'
  | 'change-password-email'
  | 'change-password-phone'
  | 'update-email-phone'
  | 'update-email-email'
  | 'verify-2fa-email'
  | 'verify-2fa-phone'
  | 'whitelisted-withdrawal-address-phone'
  | 'whitelisted-withdrawal-address-email'
  | 'withdraw-email'
  | 'withdraw-phone'
  | 'internal-transfer-email'
  | 'internal-transfer-phone';

export type SendVerifyEmailParams = {
  email: string;
  actionType: ActionEmailType;
};

export type SendVerifyPhoneParams = {
  phoneNumber: string;
  actionType: ActionPhoneType;
};

export type SendCodeParams = {
  email: string;
  phoneNumber: string;
  type: SendCodeType;
};
