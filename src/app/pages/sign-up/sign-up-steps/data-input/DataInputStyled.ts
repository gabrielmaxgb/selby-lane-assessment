import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { IDataInputContainer } from "./types";

export const DataInputContainer = styled(Grid)<IDataInputContainer>`
  #arrow-back-icon {
    color: ${(props) => props.theme.customThemeColors?.lighGray};
  }

  #arrow-forward-icon {
    color: ${(props) => props.theme.customThemeColors?.white};
    background-color: ${(props) => props.theme.customThemeColors?.lighGray};
    border-radius: 100%;
  }

  .content {
    max-width: 417px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    #fields {
      display: flex;
      flex-direction: ${(props) => (props.extraSmallScreen ? "column" : "row")};
      justify-content: space-between;

      margin-bottom: 1rem;
      width: 100%;
    }

    #action-area {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-top: ${(props) => (props.mediumScreenSize ? "5rem" : "")};
    }
  }
`;
