import { Grid } from "@mui/material";
import { ContainerStyled } from "./ContainerStyled";
import { IContainerProps } from "./types";

const Container = (props: IContainerProps) => {
  const { children, ...stylingProps } = props;

  return (
    <ContainerStyled {...stylingProps}>
      <Grid
        className="container"
        item
        container
        xs={12}
        justifyContent={"center"}
      >
        <Grid className="harmonizer" item container xs={12} md={11}>
          {children}
        </Grid>
      </Grid>
    </ContainerStyled>
  );
};

export default Container;
