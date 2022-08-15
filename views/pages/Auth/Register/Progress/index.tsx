import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledSteps } from './styled';

const { Step } = StyledSteps;

const Progress = ({ step }) => {
  const { t } = useTranslation('auth');
  return (
    <StyledSteps direction='vertical' current={step - 1}>
      <Step title={t('register.steps.email')} />
      <Step title={t('register.steps.confirmEmail')} />
      <Step title={t('register.steps.phone')} />
      <Step title={t('register.steps.confirmPhone')} />
    </StyledSteps>
  );
};

export default Progress;
