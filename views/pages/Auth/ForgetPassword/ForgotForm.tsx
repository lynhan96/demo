import React, { useRef, useState } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'next-i18next';

import { forgotVerifyAccountQuery } from '@data/user';
import { handleMutate } from '@data/index';
import { formatPhone } from '@utils/function';

import PhoneCode, { PhoneCodeHandle } from 'views/components/SelectPhoneCode';
import RecaptchaModal, { ModalHandle } from 'views/components/RecaptchaModal';
import { SuccessNotification } from 'views/components/message';

import { StyledForm } from 'views/components/styled';
import { SubmitButton, Title } from '../styled';
import VerifyCode from './VerifyCode';
import { Type, TypeWrapper } from './styled';
import { sendVerifyEmailQuery, sendVerifyPhoneQuery } from '@data/verify-code';

const ForgotPassword = () => {
  const { t } = useTranslation('auth');
  const phoneCodeRef = useRef<PhoneCodeHandle>(null);
  const captChaRef = useRef<ModalHandle>(null);
  const { mutate, isLoading } = forgotVerifyAccountQuery();
  const [step, setStep] = useState(1);
  const [type, setType] = useState('email');
  const [formData, setFormData] = useState({
    email: '',
    phoneNumber: '',
    isEmail: true,
  });
  const [form] = StyledForm.useForm();

  const { mutate: sendEmailMutate } = sendVerifyEmailQuery();
  const { mutate: sendPhoneMutate } = sendVerifyPhoneQuery();

  const onSendCode = (account: string) => {
    if (type === 'email') {
      handleMutate(sendEmailMutate, {
        params: {
          email: account,
          actionType: 'forgot-password-email',
        },
        onSuccess: () => {
          SuccessNotification('SENT_EMAIL_VERIFY_CODE');
        },
        showError: true,
      });
    } else {
      handleMutate(sendPhoneMutate, {
        params: {
          phoneNumber: account,
          actionType: 'forgot-password-phone',
        },
        onSuccess: () => {
          SuccessNotification('SENT_PHONE_VERIFY_CODE');
        },
        showError: true,
      });
    }
  };

  const onForgot = (values) => {
    const account =
      type === 'phone'
        ? formatPhone(phoneCodeRef.current.getCode(), values.phoneNumber)
        : values.email;

    handleMutate(mutate, {
      params: {
        account: account,
        isEmail: type === 'email',
      },
      onSuccess: () => {
        onSendCode(account);
        setFormData({
          email: values.email || '',
          phoneNumber: values.phoneNumber
            ? formatPhone(phoneCodeRef.current.getCode(), values.phoneNumber)
            : '',
          isEmail: type === 'email',
        });
        setStep(2);
      },
      showError: true,
    });
  };

  const onConfirmedCaptcha = (captchaToken: string) => {
    onForgot({ ...form.getFieldsValue(), captchaToken });
  };

  const onFinish = async () => {
    captChaRef.current.open();
  };

  return step === 1 ? (
    <>
      <Title>{t('forgot.title')}</Title>
      <TypeWrapper>
        <Type onClick={() => setType('email')} active={type === 'email'}>
          {t('login.email')}
        </Type>
        <Type onClick={() => setType('phone')} active={type === 'phone'}>
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
        <RecaptchaModal ref={captChaRef} onChange={onConfirmedCaptcha} />

        {type === 'email' ? (
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
        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.next')}
        </SubmitButton>
      </StyledForm>
    </>
  ) : (
    <VerifyCode formData={formData} />
  );
};

export default ForgotPassword;
