import { useTheme } from '@mui/material';
import liwaLogo from '../../assets/imgs/liwa-logo.png';
import Container from '../common/container/Container';
import { IHeaderProps } from './types';

const Header = ({ location }: IHeaderProps) => {
  const theme = useTheme();

  return (
    <Container backgroundColor={theme.customThemeColors.blue} p={'0.5rem'}>
      <img id="liwa-logo" src={liwaLogo} alt="Liwa logo" />
    </Container>
  );
};

export default Header;
