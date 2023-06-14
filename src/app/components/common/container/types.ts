import { IChildren, ICustomizableComponent } from "../../../types/commonTypes";

// Component
export interface IContainerProps extends IChildren, ICustomizableComponent {}

// Styling
export type IContainerStyled = ICustomizableComponent;
