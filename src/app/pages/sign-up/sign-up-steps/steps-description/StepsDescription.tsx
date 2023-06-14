import { Grid, Typography } from "@mui/material";
import { useSteps } from "../../../../hooks/outlet/useSteps";

const StepsDescription = () => {
  const { currentStep, setCurrentStep } = useSteps();

  return (
    <Grid
      item
      container
      xs={12}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
      flexDirection={"column"}
    >
      you're at 1
      <button onClick={() => setCurrentStep(currentStep + 1)}>
        <Typography>go to 2</Typography>
      </button>
    </Grid>
  );
};

export default StepsDescription;
