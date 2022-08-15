import styled from 'styled-components';
import { Steps } from 'antd';

export const StyledSteps = styled(Steps)`
  && {
    max-width: 250px;
    .ant-steps-item-content {
      min-height: 70px !important;
    }

    .ant-steps-item-title {
      color: ${({ theme }) => theme.colors.secondaryTextColor} !important;
    }

    .ant-steps-item-icon {
      background: ${({ theme }) => theme.auth.register.stepNumberBg};
      border-color: ${({ theme }) => theme.auth.register.stepNumberBg};

      .ant-steps-icon {
        color: rgb(112, 122, 138);
      }
    }

    .ant-steps-item-tail {
      width: 3px !important;
      left: 15px !important;
      &:after {
        width: 3px !important;
        background: ${({ theme }) =>
          theme.auth.register.stepNumberBg} !important;
      }
    }

    .ant-steps-item-finish,
    .ant-steps-item-active {
      .ant-steps-item-title {
        font-weight: 500;
        color: ${({ theme }) => theme.auth.register.stepActiveText} !important;
      }

      .ant-steps-item-icon {
        background: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};

        .ant-steps-icon {
          color: rgb(24, 26, 32);
        }
      }
    }

    .ant-steps-item-finish {
      .ant-steps-item-tail {
        &:after {
          width: 3px !important;
          background: ${({ theme }) => theme.colors.primary} !important;
        }
      }

      .anticon {
        vertical-align: 0;
        color: #fff;
      }
    }
  }
`;
