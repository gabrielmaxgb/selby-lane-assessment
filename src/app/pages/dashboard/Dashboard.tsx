import { Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { UserContextType } from "../../context/user/types";
import { UserContext } from "../../context/user/userContext";
import { DashboardContainer } from "./DashboardStyled";

const Dashboard = () => {
  const userContext = useContext<UserContextType | null>(UserContext);

  return (
    <DashboardContainer>
      <Grid
        item
        container
        xs={11}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography textAlign={"center"} variant="h2" mb={"1rem"}>
          Hi, {userContext?.user.firstName}
        </Typography>
        <Typography textAlign={"center"} variant="h1">
          Welcome to your dashboard!
        </Typography>
      </Grid>
    </DashboardContainer>
  );
};

export default Dashboard;
