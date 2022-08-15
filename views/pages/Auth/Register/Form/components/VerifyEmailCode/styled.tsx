import styled from 'styled-components';

export const CountdownWrapper = styled.div`
  margin-top: 0;
  span {
    font-size: 14px;
    color: #9ea7b7;
  }
`;

export const ResendButton = styled.div`
  cursor: pointer;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const NoticeLabel = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
