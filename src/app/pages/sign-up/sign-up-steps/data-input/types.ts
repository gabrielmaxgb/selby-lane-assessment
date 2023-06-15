import { ITheme } from "../../../../types/commonTypes";

export interface IDataInputContainer extends ITheme {
  extraSmallScreen: boolean;
  mediumScreenSize: boolean;
}

export type Inputs = {
  firstName: string;
  lastName: string;
};
