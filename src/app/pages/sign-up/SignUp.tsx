import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import { SignupContainer } from "./SignUpStyled";

const SignUp = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    navigate(`/signup/${currentStep}`);
  }, [navigate, currentStep]);

  return (
    <SignupContainer>
      <Header currentStep={currentStep} />
      <main id="outlet">
        <Outlet context={{ currentStep, setCurrentStep }} />
      </main>
    </SignupContainer>
  );
};

export default SignUp;
