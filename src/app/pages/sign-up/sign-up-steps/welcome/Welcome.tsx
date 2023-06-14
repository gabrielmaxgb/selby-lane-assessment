import { Grid } from "@mui/material";

const Welcome = () => {
  // const { currentStep, setCurrentStep } = useSteps();

  return (
    <Grid
      item
      container
      xs={12}
      alignItems={"center"}
      justifyContent={"center"}
      height={"100%"}
    >
      you're at 3
    </Grid>
  );
};

export default Welcome;
