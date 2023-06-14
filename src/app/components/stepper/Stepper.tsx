import { useEffect, useState } from 'react';
import { StepperContainer } from './StepperStyled';
import { IStepperProps } from './types';

const Stepper = ({ currentStep }: IStepperProps) => {
  const [localStep, setLocalStep] = useState(currentStep);

  useEffect(() => {
    setLocalStep(currentStep);
  }, [currentStep]);

  return (
    <StepperContainer>
      {[1, 2, 3].map((step) => {
        return <div className={`step ${step <= localStep && 'filled'}`} />;
      })}
    </StepperContainer>
  );
};

export default Stepper;
