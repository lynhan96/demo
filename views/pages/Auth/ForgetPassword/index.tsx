import React from 'react';
import { Col, Row, Space } from 'antd';
import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'next-i18next';

import ForgotForm from './ForgotForm';
import { Container, StyledAlert, Box } from '../styled';

const ForgotPassword = () => {
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
          <Row gutter={130}>
            <Col xs={24} md={14}>
              <ForgotForm />
            </Col>
          </Row>
        </Box>
      </Container>
    </>
  );
};

export default ForgotPassword;
