import styled from 'styled-components';
import { Layout } from 'antd';

export const StyledLayout = styled(Layout)`
  background: ${({ theme }) => theme.colors.background};
`;

export const HelpButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  padding: 10px;
  border-radius: 40px;
  font-weight: bold;
  font-size: 16px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: white;
  z-index: 99;

  svg {
    fill: black;
    width: 20px;
  }
`;
