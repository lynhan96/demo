import { Col } from 'antd';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const Notice = styled.div`
  width: 100%;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #697281;
  display: flex;
  flex-direction: column;

  a {
    margin-top: 10px;
  }
`;

export const StepCol = styled(Col)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
