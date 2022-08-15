import React, { useEffect, useState } from 'react';

import LockIcon from '@mui/icons-material/Lock';
import { useTranslation } from 'react-i18next';
import { Col, Row, Space } from 'antd';
import Progress from './Progress';
import Form from './Form';

import { Box, StyledAlert, Container } from '../styled';
import { StepCol } from './styled';
import { useRouter } from 'next/router';
import { ShowWarning } from 'views/components/message';

export type FormDataType = {
  userId?: string;
  email?: string;
  password?: string;
  phoneNumber?: string;
  referralCode?: string;
};

const Register = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>();
  const { t } = useTranslation('auth');

  useEffect(() => {
    if (router.query.key) {
      setStep(3);
      setFormData({ userId: router.query.key.toString() });
      ShowWarning('REQUIRED_SETUP_PHONE');
    }
  }, []);

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
            <Col xs={24} md={12}>
              <Form
                step={step}
                setFormData={setFormData}
                formData={formData}
                setStep={setStep}
              />
            </Col>
            <StepCol xs={24} md={12}>
              <Progress step={step} />
            </StepCol>
          </Row>
        </Box>
      </Container>
    </>
  );
};

export default Register;
