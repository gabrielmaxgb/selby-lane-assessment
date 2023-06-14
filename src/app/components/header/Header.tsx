import { useTheme } from '@mui/material';
import liwaLogo from '../../assets/imgs/liwa-logo.png';
import Container from '../common/container/Container';
import Stepper from '../stepper/Stepper';
import { IHeaderProps } from './types';

const Header = ({ currentStep }: IHeaderProps) => {
  const theme = useTheme();

  return (
    <>
      <Container backgroundColor={theme.customThemeColors.blue} p={'0.5rem'}>
        <img id="liwa-logo" src={liwaLogo} alt="Liwa logo" />
      </Container>
      <Stepper currentStep={currentStep} />
    </>
  );
};

export default Header;
