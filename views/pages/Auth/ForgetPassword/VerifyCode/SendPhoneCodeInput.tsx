import React, { useEffect, useState } from 'react';
import Countdown from 'react-countdown';
import { Input } from 'antd';

import { StyledForm } from 'views/components/styled';
import { sendVerifyPhoneQuery } from '@data/verify-code';
import { handleMutate } from '@data/index';
import { CountdownWrapper, ResendButton } from './styled';
import { useTranslation } from 'react-i18next';
import { ShowError, ShowSuccess } from 'views/components/message';

export type SendCodeInputProps = {
  phoneNumber: string;
};

const rendererCountdown = (setTimer, { minutes, seconds, completed }) => {
  if (completed) {
    setTimer(0);
    return <span></span>;
  } else {
    return <span>{minutes * 60 + seconds}s</span>;
  }
};

const SendCodeInput: React.FC<SendCodeInputProps> = ({ phoneNumber }) => {
  const [timer, setTimer] = useState(0);
  const { mutate, isLoading } = sendVerifyPhoneQuery();
  const { t } = useTranslation('auth');

  const onSend = () => {
    handleMutate(mutate, {
      params: {
        phoneNumber: phoneNumber,
        actionType: 'forgot-password-phone',
      },
      onSuccess: () => {
        setTimer(Date.now() + 120000);
      },
      onError: (error) => {
        if (error?.response === 'SEND_CODE.LIMIT_RESEND') {
          ShowSuccess(error?.response);
          setTimer(Date.now() + 120000);
        } else {
          ShowError(error?.response);
        }
      },
      successCode: 'RESENT_VERIFY_CODE',
      showError: true,
    });
  };

  useEffect(() => {
    setTimer(Date.now() + 120000);
  }, []);

  return (
    <StyledForm.Item
      name='code'
      label={t('form.label.phoneVerifyCode')}
      rules={[
        {
          required: true,
          message: t('form.validate.verifyCode'),
        },
      ]}
    >
      <Input
        addonAfter={
          <CountdownWrapper>
            {timer > 0 ? (
              <Countdown
                date={timer}
                renderer={(time) => rendererCountdown(setTimer, time)}
              />
            ) : (
              <ResendButton onClick={() => !isLoading && onSend()}>
                {isLoading ? t('form.button.sending') : t('form.button.resend')}
              </ResendButton>
            )}
          </CountdownWrapper>
        }
      />
    </StyledForm.Item>
  );
};

export default SendCodeInput;
