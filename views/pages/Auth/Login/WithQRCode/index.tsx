import React, { useEffect, useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import io from 'socket.io-client';
import { useTranslation } from 'react-i18next';
import { Trans } from 'next-i18next';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Countdown from 'react-countdown';

import {
  Wrapper,
  Text,
  QRCodeWrapper,
  BoldText,
  Loading,
  Timer,
  TimerText,
} from './styled';
import { themes } from 'views/theme';

import { setAuthCredentials } from '@utils/auth-utils';
import { PAGE_ROUTES } from '@utils/routes';
import { ButtonAnt } from 'views/components/styled';

const renderer = (resendCode, { minutes, seconds, completed }, t) => {
  if (completed) {
    return (
      <ButtonAnt onClick={resendCode} style={{ height: 30 }}>
        {t('qrCode.reload')}
      </ButtonAnt>
    );
  } else {
    return (
      <>
        <TimerText>{t('qrCode.expiredIn')}</TimerText>
        <span
          style={{ fontWeight: 500, color: 'red' }}
        >{`0${minutes}:${seconds}`}</span>
      </>
    );
  }
};

const LoginWithQRCode = () => {
  const { t } = useTranslation('auth');
  const socketIo = useRef(null);
  const [data, setData] = useState({
    loading: true,
    code: '',
    message: t('qrCode.fetching'),
  });
  const [timer, setTimer] = useState(0);

  const startSocket = () => {
    socketIo.current = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
      transports: ['websocket'],
    });

    socketIo.current.emit('request_login', (qrCode) => {
      setData({ loading: false, code: qrCode, message: '' });
      setTimer(Date.now() + 180000);
    });

    socketIo.current.on('connect', () => {
      socketIo.current.on('login_code_wait_confirm', () => {
        setTimer(0);
        setData({ ...data, loading: true, message: t('qrCode.confirming') });
      });

      socketIo.current.on('login_code_confirm', (data) => {
        setAuthCredentials(data?.accessToken);
        window.location.href = PAGE_ROUTES.HOME;
      });
    });
  };

  const closeSocket = () => {
    socketIo.current && socketIo.current.close();
  };

  const onReload = () => {
    setData({ loading: true, code: '', message: t('qrCode.fetching') });
    closeSocket();
    startSocket();
    setTimer(0);
  };

  useEffect(() => {
    startSocket();
    return () => {
      closeSocket();
    };
  }, []);

  return (
    <Wrapper>
      <QRCodeWrapper>
        <QRCode value={data.code} size={160} />
        {data.loading && (
          <Loading>
            <ScaleLoader color={themes.dark.colors.primary} />
            {data.message && (
              <Text
                style={{
                  marginTop: 5,
                  color: '#fff',
                  padding: 0,
                  fontWeight: 500,
                  fontSize: 13,
                }}
              >
                {data.message}
              </Text>
            )}
          </Loading>
        )}
      </QRCodeWrapper>
      {timer > 0 && (
        <Timer>
          <Countdown
            date={timer}
            renderer={(time) => renderer(onReload, time, t)}
          />
        </Timer>
      )}
      <BoldText>{t('login.qrCodeTitle')}</BoldText>
      <Text>
        <Trans
          i18nKey='login.qrCodeHint'
          t={t}
          components={{
            span: (
              <a
                style={{ fontWeight: 500 }}
                href='https://beta.dreamsbit.com/'
                target='_blank'
              />
            ),
          }}
        />
      </Text>
    </Wrapper>
  );
};

export default LoginWithQRCode;
