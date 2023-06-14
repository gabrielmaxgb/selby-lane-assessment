import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from '../app/pages/not-found/NotFound';
import SignUp from '../app/pages/sign-up/SignUp';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/signup" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
