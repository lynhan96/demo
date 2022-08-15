import styled from 'styled-components';
import { ButtonAnt, AlertAnt } from 'views/components/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 70px;
  padding-bottom: 120px;
  background: ${({ theme }) => theme.colors.background};

  &.forget-form {
    padding-bottom: 250px;
  }

  @media (max-width: 768px) {
    padding: 0;

    &.forget-form {
      padding-bottom: 0;
    }
  }
`;

export const SubmitButton = styled(ButtonAnt)`
  width: 100%;
  margin-top: 30px;
`;

export const Title = styled.div`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.textColor};
  margin-bottom: 5px;
  font-weight: 600;
`;

export const SubTitle = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const Box = styled.div`
  width: 840px;

  @media (max-width: 768px) {
    padding: 70px 20px;
    width: 100%;
  }
`;

export const StyledAlert = styled(AlertAnt)`
  margin-top: 64px;

  .ant-alert-message {
    display: flex;
    justify-content: center;
    font-size: 14px;

    svg {
      color: #0ecb81;
    }
  }
`;
