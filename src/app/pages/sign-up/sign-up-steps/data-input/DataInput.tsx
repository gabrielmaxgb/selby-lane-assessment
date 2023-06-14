import { Grid, Typography } from '@mui/material';
import { useSteps } from '../../../../hooks/outlet/useSteps';

const DataInput = () => {
  const { currentStep, setCurrentStep } = useSteps();

  return (
    <Grid item container xs={12} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      you're at 2
      <button onClick={() => setCurrentStep(currentStep + 1)}>
        <Typography>go to 3</Typography>
      </button>
    </Grid>
  );
};

export default DataInput;
