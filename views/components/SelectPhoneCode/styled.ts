import styled from 'styled-components';
import { List, Modal } from 'antd';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

export const StyledList = styled(List)`
  margin-top: 15px;
  max-height: 300px;
  width: 100%;
  overflow-y: auto;
  padding: 0;
  border: none;

  .ant-list-item {
    padding: 10px 20px;
    cursor: pointer;
    border: none;
    display: flex;
    justify-content: space-between;
    font-size: 15px;

    &.active,
    &:hover {
      background-color: rgb(245, 245, 245);
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
export const StyledModal = styled(Modal)`
  .ant-modal-body {
    padding-left: 0;
    padding-right: 0;
  }

  .ant-modal-footer {
    display: flex;
    justify-content: flex-end;
    padding-top: 20px;
    padding-bottom: 20px;
    border: none;
  }
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgb(30, 35, 41);
  margin-bottom: 15px;
`;
