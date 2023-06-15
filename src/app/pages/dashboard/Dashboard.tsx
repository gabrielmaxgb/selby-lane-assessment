import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { DashboardContainer } from "./DashboardStyled";

const Dashboard = () => {
  const params = useParams();

  return (
    <DashboardContainer>
      <Typography variant="h2">
        Welcome to your dashboard, {params.user}
      </Typography>
    </DashboardContainer>
  );
};

export default Dashboard;
