import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../../components/header/Header';
import { SignupContainer } from './SignUpStyled';

const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/signup') {
      navigate('/signup/1');
    }
  }, [location.pathname, navigate]);

  return (
    <SignupContainer>
      <Header location={location} />
      <main id="outlet">
        <Outlet />
      </main>
    </SignupContainer>
  );
};

export default SignUp;
