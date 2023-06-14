import { Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DataInput = () => {
  const navigate = useNavigate();

  return (
    <Grid item container xs={12} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      you're at 2
      <button onClick={() => navigate('/signup/3')}>
        <Typography>3</Typography>
      </button>
    </Grid>
  );
};

export default DataInput;
