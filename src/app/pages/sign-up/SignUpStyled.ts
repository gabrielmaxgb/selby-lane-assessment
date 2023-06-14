import styled from '@emotion/styled';
import { HEADER_HEIGHT } from '../../components/header/consts';

export const SignupContainer = styled.main`
  --header-height: ${HEADER_HEIGHT};

  #outlet {
    height: calc(100vh - var(--header-height));
  }
`;
