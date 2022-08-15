import React, { useState, useImperativeHandle, useRef } from 'react';
import { Modal } from 'antd';
import ReCAPTCHA from 'react-google-recaptcha';
import { Wrapper, Title } from './styled';

type ModalProps = {
  onChange: Function;
};

export type ModalHandle = {
  open: () => void;
};

const RecaptchaModal: React.ForwardRefRenderFunction<
  ModalHandle,
  ModalProps
> = ({ onChange }, ref) => {
  const captchaRef = useRef(null);

  const [isShow, setShowModal] = useState(false);

  const onConfirm = (token: string) => {
    onClose();
    if (token) onChange(token);
  };

  const onClose = () => {
    setShowModal(false);
  };

  useImperativeHandle(ref, () => ({
    open: () => {
      if (captchaRef.current) captchaRef.current.reset();
      setShowModal(true);
    },
  }));

  return (
    <Modal onCancel={onClose} closable footer={null} centered visible={isShow}>
      <Wrapper>
        <Title>Verification</Title>

        <ReCAPTCHA
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY}
          onChange={onConfirm}
          onErrored={() => {}}
        />
      </Wrapper>
    </Modal>
  );
};

export default React.forwardRef(RecaptchaModal);
