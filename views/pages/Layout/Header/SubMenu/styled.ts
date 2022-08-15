import styled, { keyframes } from 'styled-components';
import { Divider } from 'antd';

const scaleDraw = keyframes`
	0% {
		transform: scale(.9)
	}
	75% {
		transform: scale(1)
	}
`;

export const StyledWrapMenuDynamic = styled.div`
  padding: 10px;
  box-sizing: border-box;
  background: ${({ theme }) => theme.components.dropdown.background};
  position: relative;
  box-shadow: 0 0 20px 0 ${({ theme }) => theme.boxShadow};
  margin-top: -15px;
  p {
    margin-top: 15px;
    margin-bottom: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
  a {
    padding: 0;
    color: ${({ theme }) => theme.colors.textColor} !important;

    &:hover {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  .ant-list {
    width: 300px;
  }
  .ant-list-item {
    z-index: 3;
    padding: 17px 18px;
    cursor: pointer;
    position: relative;
    transition: all 0.15s;

    .ant-list-item-meta-avatar {
      margin-top: 5px;
    }

    .ant-list-item-meta-title {
      margin-bottom: 0;

      a {
        color: ${({ theme }) => theme.colors.textColor};
        margin: 0;
        font-size: 16px;
      }
    }
    .ant-list-item-meta-description {
      color: ${({ theme }) => theme.header.subTitle};
      font-size: 12px;
    }

    .arrow-icon {
      color: ${({ theme }) => theme.colors.textColor};
      display: none;
    }
    &:hover {
      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.header.hover};
        -webkit-animation-name: ${scaleDraw};
        animation-name: ${scaleDraw};
        -webkit-animation-timing-function: ease-in-out;
        animation-timing-function: ease-in-out;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        -webkit-animation-duration: 0.65s;
        animation-duration: 0.65s;
        border-radius: 8px;
        z-index: -1;
      }

      .arrow-icon {
        color: ${({ theme }) => theme.colors.textColor};
        display: block;
        right: 7px;
        position: absolute;
        top: 34%;
      }
    }
  }
`;

export const AccountInfo = styled.div`
  padding: 5px 21px;
  margin: 0 10px;
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.components.dropdown.submenu};
`;

export const VerifyStatusWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
`;

export const VerifyStatus = styled.div`
  border-bottom-left-radius: 25px;
  border-top-left-radius: 25px;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  background: ${({ isVerified }) => (isVerified ? 'rgb(14, 203, 129)' : 'red')};
`;

export const DropDownText = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.components.dropdown.submenu};

  svg {
    fill: ${({ theme }) => theme.components.dropdown.submenu};
  }
`;

export const StyledDivider = styled(Divider)`
  border-top: 0.5px solid ${({ theme }) => theme.components.dropdown.divider};
  margin: 12px 0;
`;

export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  min-width: 200px;

  svg {
    margin-right: 15px;
    fill: ${({ theme }) => theme.components.dropdown.submenu};
  }

  &:active,
  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.header.hover};
    border-radius: 12px;

    ${DropDownText} {
      color: ${({ theme }) => theme.colors.primary};
    }

    svg {
      margin-right: 15px;
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;
