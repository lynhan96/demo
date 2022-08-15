import styled from 'styled-components';
import { Modal } from 'antd';

export const WrapModalContent = styled.div`
  .ant-tabs {
    color: ${({ theme }) => theme.colors.textColor}!important;
  }
  .ant-tabs-top > .ant-tabs-nav {
    margin: 0;
  }
  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom-color: ${({ theme }) => theme.languageModal.light2};
  }
  .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn,
  .ant-tabs-tab:hover {
    color: ${({ theme }) => theme.languageModal.light};
  }

  .ant-tabs-ink-bar {
    background: ${({ theme }) => theme.colors.primary};
    height: 1px !important;
  }

  .ant-tabs-nav {
    padding: 0 30px;

    .ant-tabs-tab {
      font-size: 18px;
      padding: 24px 0;
    }
  }

  .ant-tabs-tabpane {
    padding: 24px;
  }
`;

export const WrapContentTab = styled.div`
  box-sizing: border-box;
  margin: 0;
  min-width: 0;
  display: flex;
  flex-wrap: wrap;
  min-height: 200px;

  .language-tabs-content-item-text {
    position: relative;
    box-sizing: border-box;
    width: calc(25% - 16px);
    min-width: 95px;
    margin-right: 16px;
    height: 40px;
    line-height: 40px;
    padding-left: 12px;
    padding-right: 12px;
    color: ${({ theme }) => theme.colors.textColor};
    text-align: left;
    cursor: pointer;
  }

  .language-tabs-content-item-text.active,
  .language-tabs-content-item-text:hover {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.header.hover};
  }
`;

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    background: ${({ theme }) => theme.languageModal.dark5};
    border-radius: 6px;
  }
  .ant-modal-body {
    padding: 0;
  }
`;

export const LangItem = styled.div`
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.languageModal.light};
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;
  &:hover {
    background: ${({ theme }) => theme.languageModal.light3};
  }
`;

export const TabTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
`;
