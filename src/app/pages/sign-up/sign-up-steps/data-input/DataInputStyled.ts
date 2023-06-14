import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IDataInputContainer } from "./types";

export const DataInputContainer = styled(Grid)<IDataInputContainer>`
  #arrow-back-icon {
    color: ${(props) => props.theme.customThemeColors?.lighGray};
  }
`;
