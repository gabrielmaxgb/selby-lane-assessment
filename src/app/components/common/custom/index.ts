import styled from "@emotion/styled";
import { Button } from "@mui/material";
import { ICustomButton } from "./types";

export const CustomButton = styled(Button)<ICustomButton>`
  background-color: ${(props) =>
    props.backgroundColor || props.theme.customThemeColors?.primary};
  color: ${(props) => props.color || props.theme.customThemeColors?.secondary};
  text-transform: none;
  border-radius: 24px;
  padding: 0.2rem 1rem;

  :hover {
    background-color: ${(props) => props.theme.customThemeColors?.primary};
    color: ${(props) =>
      props.color || props.theme.customThemeColors?.secondary};
  }
`;
