import styled from "@emotion/styled";
import { IListItemContainer } from "./types";

export const ListItemContainer = styled.li<IListItemContainer>`
  display: flex;

  margin-bottom: 1rem;
  max-width: 380px;

  .chip-order {
    margin-right: 1rem;
  }

  .chip-label {
    color: ${(props) =>
      props.item === 1
        ? props.theme.customThemeColors?.secondary
        : props.theme.customThemeColors?.primary};
  }
`;
