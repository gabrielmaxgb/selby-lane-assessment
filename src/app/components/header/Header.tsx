import { useTheme } from "@mui/material";
import liwaLogoDark from "../../../assets/imgs/liwa-logo-dark.png";
import Container from "../common/container/Container";
import Stepper from "../stepper/Stepper";
import { IHeaderProps } from "./types";

const Header = ({ currentStep }: IHeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <Container backgroundColor={theme.customThemeColors.blue} p={"0.5rem"}>
        {/* Should be using the light logo here, but the asset wasn't provided */}
        <img id="liwa-logo-dark" src={liwaLogoDark} alt="Liwa logo" />
      </Container>
      <Stepper currentStep={currentStep} maxSteps={3} />
    </>
  );
};

export default Header;
