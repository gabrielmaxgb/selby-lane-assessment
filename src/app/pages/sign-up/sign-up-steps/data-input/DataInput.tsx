import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Button,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useSteps } from "../../../../hooks/outlet/useSteps";
import { DataInputContainer } from "./DataInputStyled";

const DataInput = () => {
  const { currentStep, setCurrentStep } = useSteps();
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DataInputContainer
      item
      container
      xs={12}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item container xs={12}>
        <Grid
          item
          container
          xs={0}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="text"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            <ArrowBackIcon id="arrow-back-icon" />
          </Button>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          <Typography
            variant="h4"
            fontWeight={600}
            color={theme.customThemeColors.blue}
            mb={"0.5rem"}
          >
            What's your name?
          </Typography>
          <Typography
            variant="body1"
            maxWidth={"300px"}
            color={theme.customThemeColors.lighGray}
          >
            Please enter your full name as it appears on your Driver's License
            or Passport
          </Typography>
          <form action=""></form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <button onClick={() => setCurrentStep(currentStep + 1)}>
            <Typography>go to 3</Typography>
          </button>
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={4}
          justifyContent={md ? "center" : "start"}
          alignItems={md ? "center" : "start"}
        ></Grid>
      </Grid>
    </DataInputContainer>
  );
};

export default DataInput;
