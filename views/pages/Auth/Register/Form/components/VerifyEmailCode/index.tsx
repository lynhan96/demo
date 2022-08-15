import React, { Dispatch } from 'react';

import { useTranslation } from 'react-i18next';
import { registerQuery } from '@data/user';
import { handleMutate } from '@data/index';

import { StyledForm } from 'views/components/styled';
import { SubmitButton, SubTitle, Title } from '../../../../styled';
import { FormDataType } from '../../..';
import SendCodeInput from './SendCodeInput';
import { SuccessNotification } from 'views/components/message';
import { hideEndString } from '@utils/function';

type Props = {
  setStep: Dispatch<number>;
  setFormData: Dispatch<FormDataType>;
  formData: FormDataType;
};

const VerifyEmailCode: React.FC<Props> = ({
  setStep,
  setFormData,
  formData,
}) => {
  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');
  const { mutate, isLoading } = registerQuery();

  const onFinish = async (values) => {
    handleMutate(mutate, {
      params: {
        email: formData.email,
        password: formData.password,
        emailCode: values.emailCode,
        referralCode: formData.referralCode,
      },
      onSuccess: ({ data }) => {
        setStep(3);
        setFormData({ userId: data });
        SuccessNotification('VERIFY_CODE_SUCCESS');
      },
      showError: true,
    });
  };

  return (
    <>
      <Title>{t('register.verifyEmailCode.title')}</Title>
      <SubTitle>
        {t('register.verifyEmailCode.subTitle', {
          email: hideEndString(formData?.email, 'email'),
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
        <SendCodeInput email={formData?.email} />

        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.submit')}
        </SubmitButton>
      </StyledForm>
    </>
  );
};

export default VerifyEmailCode;
