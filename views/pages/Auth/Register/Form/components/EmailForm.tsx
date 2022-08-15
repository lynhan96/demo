import React, { Dispatch, useEffect } from 'react';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { PAGE_ROUTES } from '@utils/routes';
import { Input, Tooltip } from 'antd';
import Link from 'next/link';
import { Trans, useTranslation } from 'react-i18next';
import { sendVerifyEmailQuery } from '@data/verify-code';
import { handleMutate } from '@data/index';

import { StyledForm } from 'views/components/styled';
import { SubmitButton, SubTitle, Title } from '../../../styled';
import { Notice, StyledCheckbox } from '../styled';
import { FormDataType } from '../..';
import { encryptedPassword } from '@utils/function';
import { SuccessNotification } from 'views/components/message';
import { useRouter } from 'next/router';

type Props = {
  setStep: Dispatch<number>;
  setFormData: Dispatch<FormDataType>;
};

const EmailForm: React.FC<Props> = ({ setStep, setFormData }) => {
  const router = useRouter();
  const [form] = StyledForm.useForm();
  const { t } = useTranslation('auth');
  const { mutate, isLoading } = sendVerifyEmailQuery();

  const onFinish = async (values) => {
    handleMutate(mutate, {
      params: {
        email: values.email,
        actionType: 'register-email',
      },
      onSuccess: () => {
        setStep(2);
        setFormData({
          email: values.email,
          password: encryptedPassword(values.password),
          referralCode: values.referralCode,
        });
        SuccessNotification('SENT_VERIFY_CODE');
      },
      showError: true,
    });
  };

  useEffect(() => {
    form.setFieldsValue({
      checkAgree: true,
    });
    if (router.query.ref) {
      form.setFieldsValue({
        referralCode: router.query.ref
      })
    }
  }, []);

  return (
    <>
      <Title>{t('register.title')}</Title>
      <SubTitle>{t('register.subTitle')}</SubTitle>
      <StyledForm
        style={{ marginTop: 20 }}
        form={form}
        onFinish={onFinish}
        layout='vertical'
        autoComplete='off'
        switchMode
      >
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

        <StyledForm.Item
          name='referralCode'
          label={t('form.label.referralCode')}
        >
          <Input
            autoComplete='off'
            placeholder={t('form.placeholder.referralCode')}
            size='large'
          />
        </StyledForm.Item>
        <StyledForm.Item
          name='checkAgree'
          label=''
          valuePropName='checked'
          rules={[
            {
              required: true,
              message: t('register.ruleValidate'),
            },
          ]}
        >
          <StyledCheckbox>
            <Trans
              i18nKey='register.ruleText'
              t={t}
              components={{
                span: <a href='' target='_blank' />,
              }}
            />
          </StyledCheckbox>
        </StyledForm.Item>
        <SubmitButton htmlType='submit' loading={isLoading}>
          {t('form.button.next')}
        </SubmitButton>
      </StyledForm>
      <Notice>
        <Link href={PAGE_ROUTES.LOGIN}>{t('link.login')}</Link>
      </Notice>
    </>
  );
};

export default EmailForm;
