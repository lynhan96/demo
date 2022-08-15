import React from 'react';
import { Row, Col } from 'antd';
import { map } from 'lodash';
import { v4 as uuid } from 'uuid';
import {
  Wrapper,
  FooterBlock,
  FooterBlockTitle,
  FooterBlockLink,
  FooterBlockList,
  FooterBlockItem,
  Copyright,
  Content,
} from './styled';
import { useTranslation } from 'next-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation('footer');

  const footerContent = t('content', { returnObjects: true }) as any;
  const rightContent = t('community', { returnObjects: true }) as any;

  return (
    <Wrapper>
      <Content>
        <Row gutter={[30, 30]}>
          {map(footerContent, (f) => (
            <Col xs={24} sm={12} lg={5} key={uuid()}>
              <FooterBlock>
                <FooterBlockTitle>{f.title}</FooterBlockTitle>
                <FooterBlockList>
                  {map(f.list, (l) => (
                    <FooterBlockItem>
                      <a target='_blank' href={l.link}>
                        <FooterBlockLink>{l.label}</FooterBlockLink>
                      </a>
                    </FooterBlockItem>
                  ))}
                </FooterBlockList>
              </FooterBlock>
            </Col>
          ))}
          <Col xs={24} sm={12} lg={4} key={uuid()}>
            <FooterBlock>
              <FooterBlockTitle>{rightContent.title}</FooterBlockTitle>
              <FooterBlockList>
                {map(rightContent.list, (l) => (
                  <FooterBlockItem>
                    <a target='_blank' href={l.link}>
                      <FooterBlockLink>{l.label}</FooterBlockLink>
                    </a>
                  </FooterBlockItem>
                ))}
              </FooterBlockList>
            </FooterBlock>
          </Col>
        </Row>

        <Copyright>©2022 dreamsbit.com. All rights reserved</Copyright>
      </Content>
    </Wrapper>
  );
};

export default Footer;
