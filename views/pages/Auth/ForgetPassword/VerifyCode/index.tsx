import React from 'react';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { confirmForgotQuery } from '@data/user';
import { handleMutate } from '@data/index';
import { PAGE_ROUTES } from '@utils/routes';

import SendPhoneCodeInput from './SendPhoneCodeInput';
import SendEmailCodeInput from './SendEmailCodeInput';

import { StyledForm } from 'views/components/styled';
import { encryptedPassword, hideEndString } from '@utils/function';
import { SubmitButton, SubTitle, Title } from '../../styled';
import { Input, Tooltip } from 'antd';

type Props = {
  formData: {
    email?: string;
    phoneNumber?: string;
    isEmail: boolean;
  };
};

const VerifyPhoneCode: React.FC<Props> = ({ formData }) => {
  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');
  const { mutate, isLoading } = confirmForgotQuery();

  const onFinish = async (values) => {
    handleMutate(mutate, {
      params: {
        account: formData.isEmail ? formData.email : formData.phoneNumber,
        password: encryptedPassword(values.password),
        code: values.code,
        isEmail: formData.isEmail,
      },
      onSuccess: () => {
        Router.push(PAGE_ROUTES.LOGIN);
      },
      showError: true,
      successCode: 'CHANGE_PASSWORD_SUCCESS',
    });
  };

  return (
    <>
      <Title>{t('forgot.verifyTitle')}</Title>
      <SubTitle>
        {t('forgot.subTitle', {
          account: hideEndString(
            formData.isEmail ? formData?.email : formData?.phoneNumber,
            formData.isEmail ? 'email' : 'phone'
          ),
        })}
      </SubTitle>
      <StyledForm
        switchMode
        style={{ marginTop: 20 }}
        form={form}
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'
      >
        {!formData.isEmail ? (
          <SendPhoneCodeInput phoneNumber={formData?.phoneNumber} />
        ) : (
          <SendEmailCodeInput email={formData?.email} />
        )}
        <Tooltip title={t('passwordTip')}>
          <StyledForm.Item
            name='password'
            label={t('form.label.password')}
            rules={[
              {
                required: true,
                message: t('form.validate.password'),
              },
              {
                pattern: new RegExp(
                  '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
                ),
                message: t('form.validate.passwordRule'),
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
        </Tooltip>
        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.submit')}
        </SubmitButton>
      </StyledForm>
    </>
  );
};

export default VerifyPhoneCode;
