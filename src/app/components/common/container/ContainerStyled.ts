import styled from '@emotion/styled';
import { IContainerStyled } from './types';

export const ContainerStyled = styled.div<IContainerStyled>`
  background-color: ${(props) => props.backgroundColor || undefined};
  padding: ${(props) => props.p || undefined};
  /* height: ${(props) => {
    console.log('props', props);
    return `calc(${props.height})`;
  }}; */
  height: ${(props) => props.height};
`;
