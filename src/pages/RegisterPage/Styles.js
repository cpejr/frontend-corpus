import styled from "styled-components";
import { breakpoints } from "../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const DivContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  gap: 2rem;
  padding: 20px;
  overflow: hidden;
  align-items: center;
  text-align: center;
`;

export const CheckSection = styled.div`
  
`;

export const Title = styled.h1`
  font-size: 36px;
  @media (max-width: ${breakpoints.smallMobile}){
    font-size: 22px;;
  }
`;

export const Checkbox = styled.input`

`;

export const CheckText = styled.p`

`;