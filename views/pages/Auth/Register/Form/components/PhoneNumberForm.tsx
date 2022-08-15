import React, { Dispatch, useRef } from 'react';
import { Input } from 'antd';
import { useTranslation } from 'next-i18next';

import { sendVerifyPhoneQuery } from '@data/verify-code';
import { handleMutate } from '@data/index';

import PhoneCode, { PhoneCodeHandle } from 'views/components/SelectPhoneCode';
import { SuccessNotification } from 'views/components/message';

import { StyledForm } from 'views/components/styled';
import { SubmitButton, SubTitle, Title } from '../../../styled';
import { formatPhone } from '@utils/function';

type Props = {
  setStep: Dispatch<number>;
  setFormData: Dispatch<any>;
};

const EmailForm: React.FC<Props> = ({ setStep, setFormData }) => {
  const phoneCodeRef = useRef<PhoneCodeHandle>(null);
  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');
  const { mutate, isLoading } = sendVerifyPhoneQuery();

  const onFinish = async (values) => {
    const phoneNumber = formatPhone(
      phoneCodeRef.current.getCode(),
      values.phoneNumber
    );
    handleMutate(mutate, {
      params: {
        phoneNumber,
        actionType: 'register-phone',
      },
      onSuccess: () => {
        setStep(4);
        setFormData((state) => ({ ...state, phoneNumber: phoneNumber }));
        SuccessNotification('SENT_VERIFY_CODE');
      },
      showError: true,
    });
  };

  return (
    <>
      <Title>{t('register.phoneNumber.title')}</Title>
      <SubTitle>{t('register.phoneNumber.subTitle')}</SubTitle>
      <StyledForm
        switchMode
        style={{ marginTop: 20 }}
        form={form}
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'
      >
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

        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.next')}
        </SubmitButton>
      </StyledForm>
    </>
  );
};

export default EmailForm;
