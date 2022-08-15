import React from 'react';
import {
  Container,
  Box,
  Title,
  StyledAlert,
  SubTitle,
} from 'views/pages/Auth/styled';
import { useTranslation } from 'react-i18next';
import { Col, Row, Space } from 'antd';
import LockIcon from '@mui/icons-material/Lock';
import WithPassword from './WithPassword';
import WithQRCode from './WithQRCode';

const Login = () => {
  const { t } = useTranslation('auth');
  return (
    <>
      <StyledAlert
        showIcon={false}
        banner
        message={
          <Space>
            <LockIcon fontSize='small' />
            <span style={{ fontWeight: 500 }}>{t('login.alertText')}</span>
            <span>{process.env.NEXT_PUBLIC_DOMAIN_URL}</span>
          </Space>
        }
      />
      <Container>
        <Box>
          <Title>{t('login.title')}</Title>
          <SubTitle>{t('login.subTitle')}</SubTitle>
          <Row>
            <Col xs={24} md={14}>
              <WithPassword />
            </Col>
            <Col xs={24} md={10}>
              <WithQRCode />
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  );
};

export default Login;
