import styled from "@emotion/styled";
import { IStepperContainer } from "./types";

export const StepperContainer = styled.div<IStepperContainer>`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 4px;
  transition: 2s;

  .step {
    width: 100%;
  }

  .filled {
    background-color: ${(props) => props.theme.customThemeColors?.yellow};
  }
`;
