import { useEffect, useState } from "react";
import { arrayFromNumber } from "../../../utils/arrayFromNumber";
import { StepperContainer } from "./StepperStyled";
import { IStepperProps } from "./types";

const Stepper = ({ currentStep, maxSteps }: IStepperProps) => {
  const [localStep, setLocalStep] = useState(currentStep);

  useEffect(() => {
    setLocalStep(currentStep);
  }, [currentStep]);

  return (
    <StepperContainer>
      {arrayFromNumber(maxSteps).map((step) => {
        return (
          <span
            key={step}
            className={`step ${step <= localStep && "filled"}`}
          />
        );
      })}
    </StepperContainer>
  );
};

export default Stepper;
