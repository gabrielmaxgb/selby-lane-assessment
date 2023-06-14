import { useState } from 'react';

const useStepper = (firstStep: number, lastStep: number) => {
  const [step, setStep] = useState(firstStep);

  return {
    currentStep: step,
    lastStep: lastStep,
    setStep
  };
};

export default useStepper;
