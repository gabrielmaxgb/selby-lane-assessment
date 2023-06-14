import { Grid } from '@mui/material';
import { useSteps } from '../../../../hooks/outlet/useSteps';

const Welcome = () => {
  const { currentStep, setCurrentStep } = useSteps();

  console.log('currentStep at 3', currentStep);

  return (
    <Grid item container xs={12} alignItems={'center'} justifyContent={'center'} height={'100%'}>
      you're at 3
    </Grid>
  );
};

export default Welcome;
