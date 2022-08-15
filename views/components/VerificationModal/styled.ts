import styled from 'styled-components';
import { Modal } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 26px;
  color: #212833;
  margin-bottom: 20px;
`;

export const StyledModal = styled(Modal)`
  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-bottom: 20px;
    border: none;
  }
`;

export const CountdownWrapper = styled.div`
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
