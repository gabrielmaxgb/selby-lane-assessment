import { Grid, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";
import liwaLogoDark from "../../../../../assets/imgs/liwa-logo-dark.png";
import { CustomButton } from "../../../../components/common/custom";
import { UserContextType } from "../../../../context/user/types";
import { UserContext } from "../../../../context/user/userContext";

const Welcome = () => {
  const theme = useTheme();
  const userContext = useContext<UserContextType | null>(UserContext);
  const navigate = useNavigate();

  return (
    <Grid
      item
      container
      xs={11}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <ConfettiExplosion />
      <img id="liwa-logo-dark" src={liwaLogoDark} alt="Liwa logo" />
      <Typography
        variant="h5"
        fontWeight={600}
        color={theme.customThemeColors.blue}
        m={"1rem 0"}
      >
        Congratulations.
      </Typography>
      <Typography
        variant="h5"
        fontWeight={600}
        color={theme.customThemeColors.blue}
        m={"1rem 0"}
        textAlign={"center"}
      >
        Welcome to Liwa Capital Advisors.
      </Typography>
      <Typography
        variant="body1"
        color={theme.customThemeColors.lighGray}
        mb={"1.5rem"}
        textAlign={"center"}
      >
        We're excited to embark on this journey together.
      </Typography>
      <CustomButton
        onClick={() => navigate(`/dashboard/${userContext?.user.firstName}`)}
      >
        View your dashboard
      </CustomButton>
    </Grid>
  );
};

export default Welcome;
