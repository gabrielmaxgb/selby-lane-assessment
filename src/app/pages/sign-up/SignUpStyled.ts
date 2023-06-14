import styled from "@emotion/styled";
import { HEADER_HEIGHT } from "../../components/header/consts";

export const SignupContainer = styled.main`
  --header-height: ${HEADER_HEIGHT};

  #outlet {
    display: flex;
    align-items: center;
    justify-content: center;

    height: calc(100vh - var(--header-height));
    overflow-y: auto;
  }
`;
