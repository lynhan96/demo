import React from 'react';
import Router from 'next/router';
import { useTranslation } from 'react-i18next';
import { registerVerifyPhoneQuery } from '@data/user';
import { handleMutate } from '@data/index';
import { PAGE_ROUTES } from '@utils/routes';
import { FormDataType } from '../../..';

import SendCodeInput from './SendCodeInput';
import { StyledForm } from 'views/components/styled';
import { SubmitButton, SubTitle, Title } from '../../../../styled';
import { hideEndString } from '@utils/function';

type Props = {
  formData: FormDataType;
};

const VerifyPhoneCode: React.FC<Props> = ({ formData }) => {
  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');
  const { mutate, isLoading } = registerVerifyPhoneQuery();

  const onFinish = async (values) => {
    handleMutate(mutate, {
      params: {
        phoneNumber: formData.phoneNumber,
        phoneCode: values.phoneCode,
        userId: formData.userId,
      },
      onSuccess: () => {
        Router.push(PAGE_ROUTES.LOGIN);
      },
      showError: true,
      successCode: 'REGISTER_SUCCESS',
    });
  };

  return (
    <>
      <Title>{t('register.verifyPhone.title')}</Title>
      <SubTitle>
        {t('register.verifyPhone.subTitle', {
          phone: hideEndString(formData?.phoneNumber, 'phone'),
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
        <SendCodeInput phoneNumber={formData?.phoneNumber} />

        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.submit')}
        </SubmitButton>
      </StyledForm>
    </>
  );
};

export default VerifyPhoneCode;
