import React, { useRef, useState } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { PAGE_ROUTES } from '@utils/routes';
import { Input } from 'antd';
import Link from 'next/link';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';

import { useAppState } from 'src/context/AppContext';
import { handleMutate } from '@data/index';
import { loginQuery, preLoginQuery } from '@data/user';
import { setAuthCredentials } from '@utils/auth-utils';

import RecaptchaModal, { ModalHandle } from 'views/components/RecaptchaModal';
import PhoneCode, { PhoneCodeHandle } from 'views/components/SelectPhoneCode';
import VerificationModal, {
  ModalHandle as VerificationHandle,
} from 'views/components/VerificationModal/UnAuthVerify';

import { StyledForm } from 'views/components/styled';
import { SubmitButton } from '../../styled';
import { Notice, Type, TypeWrapper, Wrapper } from './styled';
import { encryptedPassword, formatPhone } from '@utils/function';

const LoginWithPassword = () => {
  const { setUser } = useAppState();
  const recaptChaRef = useRef<ModalHandle>(null);
  const verificationCodeRef = useRef<VerificationHandle>();
  const phoneCodeRef = useRef<PhoneCodeHandle>(null);
  const [loginType, setLoginType] = useState('email');

  const { mutate: preLoginMutate, isLoading } = preLoginQuery();
  const { mutate: loginMutate, isLoading: confirmLoading } = loginQuery();

  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');

  const onPreLogin = (params) => {
    handleMutate(preLoginMutate, {
      params: {
        account:
          loginType === 'phone'
            ? formatPhone(phoneCodeRef.current.getCode(), params.phoneNumber)
            : params.email,
        isEmail: loginType === 'email',
        password: encryptedPassword(params.password),
        recaptchaToken: params.recaptchaToken,
      },
      onSuccess: ({ data }) => {
        if (!data.phoneNumber) {
          Router.push(`${PAGE_ROUTES.REGISTER}?key=${data.userId}`);
        } else {
          verificationCodeRef.current.open({
            isEnableTwoFactorCode: data.isTwoFactorAuthentication,
            phoneNumber: data.isPhoneAuthentication ? data.phoneNumber : '',
            email: data.isEmailAuthentication ? data.email : '',
          });
        }
      },
      showError: true,
    });
  };

  const onVerifyCodeSuccess = (codes) => {
    const formValues = form.getFieldsValue();

    handleMutate(loginMutate, {
      params: {
        account:
          loginType === 'phone'
            ? formatPhone(
                phoneCodeRef.current.getCode(),
                formValues.phoneNumber
              )
            : formValues.email,
        isEmail: loginType === 'email',
        password: encryptedPassword(formValues.password),
        emailCode: codes.EMAIL,
        phoneCode: codes.PHONE_NUMBER,
        twoFactorCode: codes.GOOGLE_AUTH,
      },
      onSuccess: ({ data }) => {
        setAuthCredentials(data?.accessToken);
        setUser(data);
        Router.push(PAGE_ROUTES.HOME);
        verificationCodeRef.current.close();
      },
      showError: true,
    });
  };

  const onConfirmedRecaptcha = (recaptchaToken: string) => {
    onPreLogin({ ...form.getFieldsValue(), recaptchaToken });
  };

  const onFinish = async () => {
    recaptChaRef.current.open();
  };

  return (
    <Wrapper>
      <RecaptchaModal ref={recaptChaRef} onChange={onConfirmedRecaptcha} />
      <VerificationModal
        isLoading={confirmLoading}
        onSuccess={onVerifyCodeSuccess}
        ref={verificationCodeRef}
        codeType={{
          EMAIL: 'sign-in-email',
          PHONE_NUMBER: 'sign-in-phone',
        }}
      />
      <TypeWrapper>
        <Type
          onClick={() => setLoginType('email')}
          active={loginType === 'email'}
        >
          {t('login.email')}
        </Type>
        <Type
          onClick={() => setLoginType('phone')}
          active={loginType === 'phone'}
        >
          {t('login.phoneNumber')}
        </Type>
      </TypeWrapper>

      <StyledForm
        switchMode
        style={{ marginTop: 20 }}
        form={form}
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'
      >
        {loginType === 'email' ? (
          <StyledForm.Item
            name='email'
            label={t('form.label.email')}
            rules={[
              {
                type: 'email',
                required: true,
                message: t('form.validate.email'),
              },
            ]}
          >
            <Input
              placeholder={t('form.placeholder.email')}
              size='large'
              autoComplete='off'
            />
          </StyledForm.Item>
        ) : (
          <StyledForm.Item
            name='phoneNumber'
            label={t('form.label.phoneNumber')}
            rules={[
              {
                required: true,
                message: t('form.validate.phoneNumber'),
              },
            ]}
          >
            <Input
              className='phone'
              autoComplete='off'
              placeholder={t('form.placeholder.phoneNumber')}
              addonBefore={<PhoneCode ref={phoneCodeRef} />}
              size='large'
              allowClear
            />
          </StyledForm.Item>
        )}
        <StyledForm.Item
          name='password'
          label={t('form.label.password')}
          rules={[
            {
              required: true,
              message: t('form.validate.password'),
            },
          ]}
        >
          <Input.Password
            autoComplete='off'
            placeholder={t('form.placeholder.password')}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            size='large'
          />
        </StyledForm.Item>
        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.login')}
        </SubmitButton>
      </StyledForm>
      <Notice>
        <Link href={PAGE_ROUTES.FORGET_PASSWORD}>{t('link.forgot')}</Link>
        <Link href={PAGE_ROUTES.REGISTER}>{t('link.register')}</Link>
      </Notice>
    </Wrapper>
  );
};

export default LoginWithPassword;
