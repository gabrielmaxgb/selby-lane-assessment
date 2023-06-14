import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/signup') {
      navigate('/signup/1');
    }
  }, [location.pathname, navigate]);

  return (
    <>
      <Header location={location} />
      <Outlet />
    </>
  );
};

export default SignUp;
