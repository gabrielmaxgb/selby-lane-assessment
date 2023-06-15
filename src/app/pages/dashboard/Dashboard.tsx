import { Typography } from "@mui/material";
import { useContext } from "react";
import { UserContextType } from "../../context/user/types";
import { UserContext } from "../../context/user/userContext";
import { DashboardContainer } from "./DashboardStyled";

const Dashboard = () => {
  const userContext = useContext<UserContextType | null>(UserContext);

  return (
    <DashboardContainer>
      <Typography variant="h2" mb={"1rem"}>
        Hi, {userContext?.user.firstName}
      </Typography>
      <Typography variant="h1">Welcome to your dashboard!</Typography>
    </DashboardContainer>
  );
};

export default Dashboard;
