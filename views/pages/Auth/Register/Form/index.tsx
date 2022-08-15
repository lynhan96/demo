import React, { Dispatch } from 'react';
import { Wrapper } from './styled';
import { FormDataType } from '..';
import EmailForm from './components/EmailForm';
import VerifyEmailCode from './components/VerifyEmailCode';
import PhoneNumberForm from './components/PhoneNumberForm';
import VerifyPhoneCode from './components/VerifyPhoneCode';

type Props = {
  step: number;
  setStep: Dispatch<number>;
  formData: FormDataType;
  setFormData: Dispatch<FormDataType>;
};

const Form: React.FC<Props> = ({ step, setStep, formData, setFormData }) => {
  return (
    <Wrapper>
      {step === 1 && <EmailForm setStep={setStep} setFormData={setFormData} />}
      {step === 2 && (
        <VerifyEmailCode
          setStep={setStep}
          setFormData={setFormData}
          formData={formData}
        />
      )}
      {step === 3 && (
        <PhoneNumberForm setStep={setStep} setFormData={setFormData} />
      )}
      {step === 4 && <VerifyPhoneCode formData={formData} />}
    </Wrapper>
  );
};

export default Form;
