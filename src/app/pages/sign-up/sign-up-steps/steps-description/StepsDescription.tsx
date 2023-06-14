import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StepsDescription = () => {
  const navigate = useNavigate();

  return (
    <Grid item container xs={12} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      you're at 1
      <button onClick={() => navigate('/signup/2')}>
        <Typography>2</Typography>
      </button>
    </Grid>
  );
};

export default StepsDescription;
