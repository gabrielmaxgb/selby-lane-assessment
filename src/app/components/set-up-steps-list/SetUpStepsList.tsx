import { useCallback } from "react";
import { useSteps } from "../../hooks/outlet/useSteps";
import { CustomButton } from "../common/custom";
import { SetUpStepsListContainer } from "./SetUpStepsListStyled";
import { SET_UP_STEPS_LIST } from "./consts";
import ListItem from "./list-item/ListItem";
import { ISetUpStepsListItem } from "./types";

const SetUpStepsList = () => {
  const { currentStep, setCurrentStep } = useSteps();

  console.log(currentStep);

  const renderListItem = useCallback(() => {
    return SET_UP_STEPS_LIST.map((listItem: ISetUpStepsListItem) => {
      return <ListItem key={listItem.item} itemData={listItem} />;
    });
  }, []);

  return (
    <SetUpStepsListContainer
      item
      container
      xs={12}
      md={12}
      flexDirection={"column"}
      alignItems={"center"}
    >
      <ul>{renderListItem()}</ul>
      <CustomButton
        className="start-button"
        onClick={() => setCurrentStep(currentStep + 1)}
      >
        Let's get started
      </CustomButton>
    </SetUpStepsListContainer>
  );
};

export default SetUpStepsList;
