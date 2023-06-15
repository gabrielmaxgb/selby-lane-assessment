import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../app/pages/dashboard/Dashboard";
import NotFound from "../app/pages/not-found/NotFound";
import SignUp from "../app/pages/sign-up/SignUp";
import DataInput from "../app/pages/sign-up/sign-up-steps/data-input/DataInput";
import StepsDescription from "../app/pages/sign-up/sign-up-steps/steps-description/StepsDescription";
import Welcome from "../app/pages/sign-up/sign-up-steps/welcome/Welcome";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup/1" />} />
        <Route path="/signup" element={<SignUp />}>
          <Route path="1" element={<StepsDescription />} />
          <Route path="2" element={<DataInput />} />
          <Route path="3" element={<Welcome />} />
        </Route>
        <Route path="/dashboard/:user" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
