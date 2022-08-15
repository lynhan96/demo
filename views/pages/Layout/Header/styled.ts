import styled, { css } from 'styled-components';
import { Menu } from 'antd';
import { DropdownAntd, Flex } from 'views/components/styled';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 64px;
  position: fixed;
  top: 0;
  z-index: 100;
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.trading.border};
  background: ${({ theme }) => theme.colors.background};

  @media (max-width: 1180px) {
    justify-content: space-between;
  }
`;

export const TextButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 26px;
  color: ${({ theme }) => theme.colors.textColor};
  white-space: nowrap;
`;

export const ThemeButton = styled(TextButton)`
  @media (max-width: 1180px) {
    margin-right: 0px;
  }
`;

export const SmallMenuWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1180px) {
    margin-top: 8px !important;
  }
`;

export const MenuItem = styled.a`
  display: flex;
  align-items: center;
  margin-right: 26px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.textColor};
  height: 64px;
  white-space: nowrap;
  @media (max-width: 1180px) {
    height: 56px;
    font-size: 20px;
    width: 100%;
    margin-right: 0;
    justify-content: space-between;
  }
`;

export const StyledBrand = styled.a`
  width: 200px;
  margin-right: 32px;

  @media (max-width: 1280px) {
    width: 140px;
  }
`;
export const CustomOverlay = styled.div`
  opacity: 0;
  position: fixed;
  background: ${({ theme }) => theme.colors.textColor};
  @media (max-width: 1180px) {
    ${({ navToggle }) =>
      navToggle &&
      css`
        display: flex;
        position: fixed;
        height: 100vh;
        width: 100%;
        top: 64px;
        right: 0;
        opacity: 0.05;
        animation: easeIn 500ms;
        cursor: pointer;
      `};

    @keyframes easeIn {
      0% {
        opacity: 0;
        background: ${({ theme }) => theme.colors.textColor};
      }
      90% {
        opacity: 0.05;
        background: ${({ theme }) => theme.colors.textColor};
      }
      100% {
        opacity: 0.05;
        background: ${({ theme }) => theme.colors.textColor};
      }
    }
  }
`;
export const NavbarWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1180px) {
    display: none;
    flex-direction: column;
    transform: translateX(375px);
    animation: slideOut 500ms;

    ${({ theme, navToggle }) =>
      navToggle &&
      css`
        transform: translateX(0);
        display: flex;
        position: fixed;
        height: 100vh;
        width: 375px;
        top: 64px;
        right: 0;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 24px;
        padding-left: 32px;
        background: ${theme.colors.background};
        animation: slideIn 500ms;
        @media (max-width: 767px) {
          width: 100%;
        }
      `};

    @keyframes slideIn {
      0% {
        transform: translateX(375px);
        @media (max-width: 767px) {
          transform: translateX(100%);
        }
      }
      100% {
        transform: translateX(0);
      }
    }
  }
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1180px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  @media (max-width: 1180px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledDropdown = styled(DropdownAntd)`
  @media (max-width: 1180px) {
    font-size: 20px;
    width: 100%;
  }
`;

export const NavToggle = styled.div`
  display: none;
  cursor: pointer;

  svg {
    font-size: 35px;
    fill: ${({ theme }) => theme.colors.textColor};
  }

  @media (max-width: 1180px) {
    display: flex;
  }
`;

export const StyledDropdownMenu = styled(Menu)``;

export const DownLoadText = styled.div`
  color: ${({ theme }) => theme.colors.light};
  font-size: 12px;
  line-height: 1;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PCAuthWrapper = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1180px) {
    display: none;
  }
`;

export const MobileAuthWrapper = styled.div`
  display: none;
  @media (max-width: 1180px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const QRWrapper = styled.div`
  width: 186px;
  height: 186px;
`;
