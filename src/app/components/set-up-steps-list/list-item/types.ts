import { ITheme } from "../../../types/commonTypes";
import { ISetUpStepsListItem } from "../types";

// Component
export interface IListItemProps {
  itemData: ISetUpStepsListItem;
}

// Styles
export interface IListItemContainer extends ITheme {
  item: number;
}
