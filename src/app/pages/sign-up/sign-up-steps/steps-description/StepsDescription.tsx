import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import imagePlaceholder from "../../../../../assets/icons/image-placeholder.svg";
import SetUpStepsList from "../../../../components/set-up-steps-list/SetUpStepsList";
import { StepsDescriptionContainer } from "./StepsDescriptionStyled";

const StepsDescription = () => {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.only("xs"));
  const md = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <StepsDescriptionContainer
        item
        container
        xs={11}
        sm={12}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          color={theme.customThemeColors.blue}
          mb={"1rem"}
          mt={xs ? "5rem" : ""}
        >
          Let's get you set up!
        </Typography>
        <Grid item container xs={12}>
          <Grid item container xs={0} md={4}></Grid>
          <Grid item container xs={12} md={4} justifyContent={"center"}>
            <SetUpStepsList />
          </Grid>
          <Grid
            item
            container
            xs={12}
            md={4}
            justifyContent={md ? "center" : "start"}
            alignItems={md ? "center" : "start"}
          >
            <img
              id="image-placeholder"
              src={imagePlaceholder}
              alt="Image placeholder"
              width={"200px"}
            />
          </Grid>
        </Grid>
      </StepsDescriptionContainer>
    </>
  );
};

export default StepsDescription;
