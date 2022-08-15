import errorEn from '../../public/locales/en/error_message.json';
import successEn from '../../public/locales/en/success_message.json';
import errorCn from '../../public/locales/cn/error_message.json';
import successCn from '../../public/locales/cn/success_message.json';
import errorKr from '../../public/locales/kr/error_message.json';
import successKr from '../../public/locales/kr/success_message.json';
import errorTh from '../../public/locales/th/error_message.json';
import successTh from '../../public/locales/th/success_message.json';

import { i18n } from 'next-i18next';
import { Modal, notification } from 'antd';
import {
  MessageModalIcon,
  MessageModalText,
  MessageModalWrapper,
} from './styled';

enum MessageType {
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',
}
export const getCurrentMessage = (type: MessageType) => {
  switch (i18n.language) {
    case 'en':
      if (type === MessageType.ERROR) return errorEn;
      return successEn;
    case 'cn':
      if (type === MessageType.ERROR) return errorCn;
      return successCn;
    case 'kr':
      if (type === MessageType.ERROR) return errorKr;
      return successKr;
    case 'th':
      if (type === MessageType.ERROR) return errorTh;
      return successTh;
    default:
      if (type === MessageType.ERROR) return errorEn;
      return successEn;
  }
};

export const ShowError = (errorCode: string) => {
  const message = getCurrentMessage(MessageType.ERROR);
  Modal.error({
    wrapClassName: 'message-modal',
    icon: null,
    maskClosable: true,
    centered: true,
    closeIcon: null,
    width: 340,
    content: (
      <MessageModalWrapper>
        <MessageModalIcon src='/img/icon/error-icon.png' />
        <MessageModalText>
          {message[errorCode] ? message[errorCode] : errorCode}
        </MessageModalText>
      </MessageModalWrapper>
    ),
  });
};

export const ShowSuccess = (successCode: string) => {
  const message = getCurrentMessage(MessageType.SUCCESS);
  Modal.success({
    wrapClassName: 'message-modal',
    icon: null,
    maskClosable: true,
    centered: true,
    closeIcon: null,
    width: 340,
    content: (
      <MessageModalWrapper>
        <MessageModalIcon src='/img/icon/success-icon.png' />
        <MessageModalText>
          {message[successCode] ? message[successCode] : successCode}
        </MessageModalText>
      </MessageModalWrapper>
    ),
  });
};

export const ShowWarning = (successCode: string) => {
  const message = getCurrentMessage(MessageType.SUCCESS);
  Modal.success({
    wrapClassName: 'message-modal',
    icon: null,
    maskClosable: true,
    centered: true,
    closeIcon: null,
    width: 340,
    content: (
      <MessageModalWrapper>
        <MessageModalIcon src='/img/icon/warning-icon.png' />
        <MessageModalText>
          {message[successCode] ? message[successCode] : successCode}
        </MessageModalText>
      </MessageModalWrapper>
    ),
  });
};

export const ShowConfirmation = (
  message: string,
  buttonText: string,
  cancelText: string,
  onOk?: Function,
  onCancel?: Function
) => {
  Modal.confirm({
    wrapClassName: 'confirm-modal',
    icon: null,
    maskClosable: true,
    centered: true,
    closeIcon: null,
    width: 400,
    okText: buttonText,
    cancelText: cancelText,
    onOk: () => onOk && onOk(),
    onCancel: () => onCancel && onCancel(),
    content: (
      <MessageModalWrapper>
        <MessageModalIcon src='/img/icon/warning-icon.png' />
        <MessageModalText>{message}</MessageModalText>
      </MessageModalWrapper>
    ),
  });
};

export const SuccessNotification = (successCode: string) => {
  const message = getCurrentMessage(MessageType.SUCCESS);
  notification.success({
    message: message[successCode] ? message[successCode] : successCode,
  });
};
