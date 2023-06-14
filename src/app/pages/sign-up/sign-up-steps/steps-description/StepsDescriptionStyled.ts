import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IStepsDescriptionContainer } from "./types";

export const StepsDescriptionContainer = styled(
  Grid
)<IStepsDescriptionContainer>`
  #image-placeholder {
    margin: 1rem 0 0 1rem;
    box-shadow: -1px 1px 20px 1px
      ${(props) => props.theme.customThemeColors?.lighGray};
  }
`;
