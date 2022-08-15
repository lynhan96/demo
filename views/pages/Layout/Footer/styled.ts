import styled from 'styled-components';
import { Col } from 'antd';
import { Container } from 'views/components/styled';

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.footerBorder};
  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const Content = styled(Container)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  @media (max-width: 1240px) {
    width: 100%;
  }
`;

export const StyledCol = styled(Col)`
  display: flex;
  flex-direction: column;
`;

export const FooterBlock = styled.div``;
export const FooterBlockTitle = styled.div`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.textColor};
`;

export const FooterBlockLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
`;

export const FooterBlockList = styled.ul`
  margin-top: 10px;
`;
export const FooterBlockItem = styled.li`
  margin-bottom: 10px;
`;

export const Copyright = styled.div`
  color: ${({ theme }) => theme.colors.secondaryTextColor};
  /* border-top: 1px solid ${({ theme }) => theme.footerBorder}; */
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  /* padding-top: 24px; */
  padding: 69px;
  /* margin-top: 50px; */
`;
