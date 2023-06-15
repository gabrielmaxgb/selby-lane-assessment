import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSteps } from "../../../../context/outlet/useSteps";
import { UserContextType } from "../../../../context/user/types";
import { UserContext } from "../../../../context/user/userContext";
import { DataInputContainer } from "./DataInputStyled";
import { Inputs } from "./types";

const DataInput = () => {
  const { currentStep, setCurrentStep } = useSteps();
  const theme = useTheme();
  const [fakeRequest, setFakeRequest] = useState<boolean>(false);
  const userContext = useContext<UserContextType | null>(UserContext);
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const { handleSubmit, watch, setValue } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setFakeRequest(true);
    setTimeout(() => {
      userContext?.setUser({
        firstName: data.firstName,
        lastName: data.lastName,
      });
      setCurrentStep(currentStep + 1);
      setFakeRequest(false);
      console.log(data);
    }, 2000);
  };

  return (
    <DataInputContainer
      item
      container
      xs={12}
      extraSmallScreen={xs}
      mediumScreenSize={md}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Grid item container xs={11} sm={12} justifyContent={"center"}>
        <Grid
          item
          container
          xs={12}
          md={3}
          justifyContent={"center"}
          alignItems={"center"}
          pb={md ? "5rem" : ""}
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
          md={6}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <div className="content">
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
              color={theme.customThemeColors.lighGray}
              mb={"1rem"}
            >
              Please enter your full name as it appears on your Driver's License
              or Passport
            </Typography>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div id="fields">
                <TextField
                  label="First name"
                  id="first-name-input"
                  variant="outlined"
                  value={watch("firstName")}
                  onChange={(e) => setValue("firstName", e.target.value)}
                  required
                  margin="dense"
                />
                <TextField
                  label="Last name"
                  id="last-name-input"
                  variant="outlined"
                  value={watch("lastName")}
                  onChange={(e) => setValue("lastName", e.target.value)}
                  required
                  margin="dense"
                />
              </div>
              <div id="action-area">
                {xs ? null : (
                  <Typography variant="caption">Press Enter</Typography>
                )}
                <Button type="submit" variant="text">
                  {fakeRequest ? (
                    <CircularProgress size={18} />
                  ) : (
                    <ArrowForwardIcon id="arrow-forward-icon" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </Grid>
        <Grid item container xs={12} md={3}></Grid>
      </Grid>
    </DataInputContainer>
  );
};

export default DataInput;
