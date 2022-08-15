import React, { useState, useImperativeHandle, useEffect } from 'react';
import Countdown from 'react-countdown';
import { Input, Tooltip } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { sendCodeQuery } from '@data/verify-code';
import { handleMutate } from '@data/index';
import { SendCodeType } from '@data/verify-code/types';
import { hideEndString } from '@utils/function';
import { useAppState } from 'src/context/AppContext';

import { ShowError, SuccessNotification } from '../message';

import {
  Wrapper,
  Title,
  StyledModal,
  CountdownWrapper,
  ResendButton,
  NoticeLabel,
} from './styled';
import { StyledForm, ButtonAnt } from 'views/components/styled';

export type CodeType = {
  EMAIL?: SendCodeType;
  PHONE_NUMBER?: SendCodeType;
};

type ModalProps = {
  onSuccess: Function;
  isLoading: boolean;
  codeType: CodeType;
};

export type ModalHandle = {
  open: () => void;
  close: () => void;
};

export type SendCodeInputProps = {
  type: 'EMAIL' | 'PHONE_NUMBER' | 'GOOGLE_AUTH';
  codeType: SendCodeType;
  isShow: boolean;
};

const rendererCountdown = (setTimer, { minutes, seconds, completed }) => {
  if (completed) {
    setTimer(0);
    return <span></span>;
  } else {
    return <span>{minutes * 60 + seconds}s</span>;
  }
};

const SendCodeInput: React.FC<SendCodeInputProps> = ({
  type,
  codeType,
  isShow,
}) => {
  const { user } = useAppState();
  const [timer, setTimer] = useState(0);
  const { mutate, isLoading } = sendCodeQuery();
  const { t } = useTranslation('common');

  const onSend = () => {
    handleMutate(mutate, {
      params: {
        phoneNumber: type === 'EMAIL' ? '' : user.phoneNumber,
        email: type === 'EMAIL' ? user.email : '',
        type: codeType,
      },
      onSuccess: () => {
        setTimer(Date.now() + 120000);
        SuccessNotification(
          type === 'EMAIL' ? 'SENT_EMAIL_VERIFY_CODE' : 'SENT_PHONE_VERIFY_CODE'
        );
      },
      onError: (error) => {
        if (error?.response === 'SEND_CODE.LIMIT_RESEND') {
          SuccessNotification(error?.response);
          setTimer(Date.now() + 120000);
        } else {
          ShowError(error?.response);
        }
      },
    });
  };

  useEffect(() => {
    if (isShow) setTimer(0);
  }, [isShow]);

  return (
    <StyledForm.Item
      name={type}
      label={
        type === 'EMAIL' ? (
          <NoticeLabel>
            {t('verificationModal.email.label', {
              value: hideEndString(user?.email, 'email'),
            })}
            <Tooltip title={t('verificationModal.email.tip')}>
              <QuestionCircleOutlined />
            </Tooltip>
          </NoticeLabel>
        ) : (
          t('verificationModal.sms.label', {
            value: hideEndString(user?.phoneNumber, 'phone'),
          })
        )
      }
      rules={[
        {
          required: true,
          message:
            type === 'EMAIL'
              ? t('verificationModal.email.rule')
              : t('verificationModal.sms.rule'),
        },
      ]}
    >
      <Input
        className='countdown'
        addonAfter={
          <CountdownWrapper>
            {timer > 0 ? (
              <Countdown
                date={timer}
                renderer={(time) => rendererCountdown(setTimer, time)}
              />
            ) : (
              <ResendButton onClick={() => !isLoading && onSend()}>
                {isLoading
                  ? t('verificationModal.button.wait')
                  : t('verificationModal.button.send')}
              </ResendButton>
            )}
          </CountdownWrapper>
        }
        placeholder={
          type === 'EMAIL'
            ? t('verificationModal.email.placeholder')
            : t('verificationModal.sms.placeholder')
        }
      />
    </StyledForm.Item>
  );
};

const VerificationModal: React.ForwardRefRenderFunction<
  ModalHandle,
  ModalProps
> = ({ onSuccess, isLoading, codeType }, ref) => {
  const { accountSettings } = useAppState();
  const [form] = StyledForm.useForm();

  const [isShow, setShowModal] = useState(false);
  const { t } = useTranslation('common');

  const onFinish = (values) => {
    onSuccess({
      EMAIL: values.EMAIL || '',
      PHONE_NUMBER: values.PHONE_NUMBER || '',
      GOOGLE_AUTH: values.GOOGLE_AUTH || '',
    });
  };

  const onClose = () => {
    form.resetFields();
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      setShowModal(true);
    },
    close: () => onClose(),
  }));

  return (
    <StyledModal
      onCancel={onClose}
      closable={!isLoading}
      centered
      visible={isShow}
      footer={[
        <ButtonAnt
          loading={isLoading}
          onClick={() => form.submit()}
          style={{
            borderRadius: 2,
            width: 140,
            height: 36,
          }}
        >
          {t('verificationModal.button.confirm')}
        </ButtonAnt>,
      ]}
    >
      <Wrapper>
        <Title>{t('verificationModal.title')}</Title>
        <StyledForm
          form={form}
          onFinish={onFinish}
          layout='vertical'
          style={{ maxWidth: '100%' }}
        >
          {accountSettings?.isEmailAuthentication && (
            <SendCodeInput
              type='EMAIL'
              codeType={codeType['EMAIL']}
              isShow={isShow}
            />
          )}
          {accountSettings?.isPhoneAuthentication && (
            <SendCodeInput
              type='PHONE_NUMBER'
              codeType={codeType['PHONE_NUMBER']}
              isShow={isShow}
            />
          )}
          {accountSettings?.isTwoFactorAuthentication && (
            <StyledForm.Item
              name='GOOGLE_AUTH'
              label={t('verificationModal.googleCode.label')}
              rules={[
                {
                  required: true,
                  message: t('verificationModal.googleCode.rule'),
                },
              ]}
            >
              <Input
                placeholder={t('verificationModal.googleCode.placeholder')}
              />
            </StyledForm.Item>
          )}
        </StyledForm>
      </Wrapper>
    </StyledModal>
  );
};

export default React.forwardRef(VerificationModal);
