import styled, { css } from 'styled-components';
import { Dropdown, Button, Form, Alert, Select, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;

  @media (max-width: 1280px) {
    width: 100%;
    padding: 0 40px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const DropdownAntd = styled(Dropdown)`
  && {
    display: flex;
    align-items: center;

    .anticon {
      color: ${({ theme }) => theme.colors.textColor};
      font-size: 10px;
      margin-left: 5px;
    }

    .anticon:hover {
      color: ${({ theme }) => theme.colors.primary};
    }

    .ant-badge-dot {
      box-shadow: none;
      width: 8px;
      height: 8px;
    }
  }
`;

export const ButtonAnt = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.components.button.background};
  color: ${({ theme }) => theme.components.button.color};
  height: ${({ size }) => (size === 'small' ? 32 : 44)}px;
  font-size: ${({ size }) => (size === 'small' ? 14 : 15)}px;
  border: none;
  padding: 12px 20px;

  &.ant-btn {
    font-weight: 500;
  }

  &.ant-btn-icon-only {
    border: ${({ noBorder }) => (noBorder ? 'none' : '2px solid #163f54')};
    border-radius: 5px;
    padding: 0;
    height: 26px;
  }

  &:focus,
  &:active,
  &:hover {
    background: ${({ theme }) => theme.components.button.background};
    color: ${({ theme }) => theme.components.button.color};
  }
  && {
    a {
      padding: 0 !important;
      color: ${({ theme }) => theme.components.button.color}!important;
    }
    a:hover {
      color: ${({ theme }) => theme.components.button.color}!important;
    }
    .nav-link {
      line-height: 22px;
      margin: 0;
    }
  }

  &.btn-light {
    background: ${({ theme }) => theme.components.button.lightBackground};
    color: ${({ theme }) => theme.colors.textColor};
  }

  .ant-btn-loading-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const AlertAnt = styled(Alert)`
  &.ant-alert {
    align-items: flex-start;
  }

  &.ant-alert-warning {
    border: none;
    background-color: ${({ theme }) => theme.components.alert.warning};
  }

  .ant-alert-message {
    color: ${({ theme }) => theme.colors.textColor};
  }

  .ant-alert-icon {
    margin-top: 4px;
  }
`;

export const ButtonText = styled(Button)`
  border-radius: none;
  background: none;
  color: ${({ theme }) => theme.colors.textColor};
  height: ${({ size }) => (size === 'small' ? 32 : 44)}px;
  border: none;
  padding: 0;
  &.ant-btn-icon-only {
    border: 2px solid #163f54;
    border-radius: 5px;
    padding: 0;
    height: 26px;
  }
  &:hover,
  &&.ant-btn:focus {
    background: none;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const inputStyle = css`
  height: 48px;
  box-shadow: none !important;
  background: transparent !important;
  /* border-color: ${({ theme, switchMode }) =>
    !switchMode ? theme.lightForm.border : theme.components.form.border}; */
  border-color: ${({ theme }) => theme.colors.footerBorder};
  color: ${({ theme, switchMode }) =>
    !switchMode ? theme.lightForm.text : theme.components.form.text};
  border-radius: 4px;
  font-size: 15px;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const formSelectStyle = css`
  height: 48px !important;
  box-shadow: none !important;
  background: transparent !important;
  border-color: ${({ theme, switchMode }) =>
    !switchMode
      ? theme.lightForm.border
      : theme.components.form.border} !important;
  color: ${({ theme, switchMode }) =>
    !switchMode ? theme.lightForm.text : theme.components.form.text};
  border-radius: 4px;
  font-size: 15px;

  .ant-select-selection-item,
  .ant-select-selection-search {
    display: flex;
    align-items: center;
  }

  .ant-select-selector {
    height: 48px;
    border-radius: 4px;
  }

  .ant-select-selection-placeholder {
    display: flex;
    align-items: center;
  }

  &.ant-select-focused .ant-select-selector {
    border-color: ${({ theme }) => theme.colors.primary} !important;
    box-shadow: none !important;
  }
`;

export const StyledForm = styled(Form)`
  width: 100%;

  .ant-form-item-has-error .ant-input-group-addon,
  .ant-form-item-has-error .ant-input-number-group-addon {
    border-color: #ff4d4f !important;
  }
  .ant-form-item {
    margin-bottom: 15px;

    .ant-form-item-label {
      label {
        width: 100%;
        font-size: 15px;
        color: ${({ theme, switchMode }) =>
          !switchMode ? theme.lightForm.label : theme.components.form.label};
      }
    }

    .ant-input-group-addon {
      background: transparent;
    }

    .ant-input-affix-wrapper {
      height: 48px;

      &:focus,
      &:hover,
      &-focused {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        box-shadow: none;
      }
      .ant-input {
        height: auto;
      }
    }

    .ant-input-password,
    .ant-picker,
    .ant-input {
      ${inputStyle}
    }

    .ant-select {
      ${formSelectStyle}
    }

    .ant-picker {
      input {
        font-size: 15px;
      }
    }
    .ant-input-group {
      .ant-input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }

      .ant-input-group-addon {
        border-left: 0;
        border-top: 1px solid
          ${({ theme, switchMode }) =>
            !switchMode
              ? theme.lightForm.border
              : theme.components.form.border};
        border-right: 1px solid
          ${({ theme, switchMode }) =>
            !switchMode
              ? theme.lightForm.border
              : theme.components.form.border};
        border-bottom: 1px solid
          ${({ theme, switchMode }) =>
            !switchMode
              ? theme.lightForm.border
              : theme.components.form.border};
      }
    }

    .phone {
      width: calc(100% - 10px);

      .phone-text {
        color: ${({ theme, switchMode }) =>
          !switchMode ? theme.lightForm.text : theme.components.form.text};
      }
      .ant-input-group-addon {
        border-radius: 4px;
        border-right: 1px;
        border: 1px solid
          ${({ theme, switchMode }) =>
            !switchMode
              ? theme.lightForm.border
              : theme.components.form.border} !important;
      }

      .ant-input-affix-wrapper {
        margin-left: 10px;
        border-radius: 4px;
        background: transparent !important;
        border: 1px solid
          ${({ theme, switchMode }) =>
            !switchMode
              ? theme.lightForm.border
              : theme.components.form.border};
      }
    }
  }
  .countdown {
    .ant-input-group-addon {
      border-top: 1px solid #d9d9d9 !important;
      border-right: 1px solid #d9d9d9 !important;
      border-bottom: 1px solid #d9d9d9 !important;
    }
  }

  @media (max-width: 768px) {
    max-width: 100% !important;
  }
`;

export const MessageModalWrapper = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MessageModalIcon = styled.img`
  width: 60px;
`;

export const MessageModalText = styled.div`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-top: 20px;
`;
export const Spacer = styled.div`
  flex: 1;
`;
export const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-direction: ${({ direction }) => direction || 'row'};
  margin: ${({ ma }) => ma || '0'};
  padding: ${({ pa }) => pa || '0'};

  ${({ expanded }) =>
    expanded &&
    css`
      width: 100%;
    `};

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `};

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `};

  ${({ hover }) =>
    hover &&
    css`
      cursor: pointer;
    `};
`;

export const Position = styled.div`
  position: ${({ pos }) => pos || 'static'};
`;

export const Text = styled.div`
  font-size: ${({ fs }) => `${fs} !important` || '15px'};
  font-weight: ${({ fw }) => `${fw} !important` || 400};
  line-height: ${({ lh }) => lh || 'normal'};
  color: ${({ color }) => color || '#333'};
  margin: ${({ ma }) => ma || '0'};
  padding: ${({ pa }) => pa || '0'};
  white-space: ${({ ws }) => ws || 'normal'};
  text-decoration: ${({ td }) => td || 'none'};
  cursor: ${({ cs }) => cs || 'normal'};

  ${({ center }) =>
    center &&
    css`
      text-align: center;
    `}

  ${({ tooltip }) =>
    tooltip &&
    css`
      border-bottom: 1px dotted;
    `}
  ${({ secondary }) =>
    secondary &&
    css`
      color: ${({ theme }) => theme.colors.secondaryTextColor};
    `}
    
  ${({ primary }) =>
    primary &&
    css`
      color: ${({ theme }) => theme.colors.primary};
    `}
`;

export const ThemeText = styled(Text)`
  color: ${({ theme }) => theme.colors.textColor};
`;

export const StatusText = styled(Text)`
  ${({ status }) => {
    switch (status) {
      case 1: // positive
        return css`
          color: ${({ theme }) => theme.positiveText};
        `;
      case -1: // negative
        return css`
          color: ${({ theme }) => theme.negativeText};
        `;
      default:
        // normal
        return css`
          color: ${({ theme }) => theme.colors.textColor};
        `;
    }
  }}

  font-weight: 500;
`;

export const TextButton = styled(Text)`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  cursor: not-allowed;
  ${({ active }) =>
    active &&
    css`
      color: ${({ theme }) => theme.colors.primary};
      cursor: pointer;
    `};
  font-weight: 500;
  white-space: nowrap;
`;

export const LinkText = styled.a`
  color: ${({ color, theme }) => color || theme.colors.primary};
  font-size: ${({ fs }) => fs || '16px'};
`;

export const CursorPointer = styled.div`
  cursor: pointer;
`;

export const StyledSelectBorder = styled(Select)`
  min-width: 150px;
  font-size: 12px;
  background-color: ${({ theme }) => theme.colors.background} !important;
  .ant-select-selector {
    color: ${({ theme }) => theme.colors.textColor} !important;
    background-color: ${({ theme }) => theme.colors.background} !important;
    border: 1px solid ${({ theme }) => theme.footerBorder} !important;
  }
  .ant-select-selection-item {
    background-color: ${({ theme }) => theme.colors.background} !important;
    font-size: 14px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.textColor} !important;
  }
  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.textColor} !important;
  }
  &.ant-select-open {
    .ant-select-selection-item {
      color: ${({ theme }) => theme.colors.secondaryTextColor} !important;
    }
  }
`;

export const StyledRangePicker = styled(RangePicker)`
  min-height: 32px;
  input {
    font-size: 12px;
  }

  margin-left: 20px;

  @media (max-width: 442px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  margin: 20px auto 0;
  padding: 20px 16px 20px 20px;
  background: #fff;
  box-shadow: 0 8px 16px -16px #888;
  border-radius: 6px;
`;
