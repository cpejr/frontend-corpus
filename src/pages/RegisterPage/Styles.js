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
  padding: 20px;
  overflow: hidden;
  align-items: center;
  text-align: center;
`;

export const CheckSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const Title = styled.h1`
  font-size: 36px;
  padding: 2rem;
  @media (max-width: ${breakpoints.smallMobile}){
    font-size: 22px;
  }
`;

export const Checkbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  @media (max-width: ${breakpoints.smallMobile}){
    width: 15px;
    height: 15px;
  }
`;

export const CheckText = styled.p`
  font-size: 20px;
  @media (max-width: ${breakpoints.smallMobile}){
    font-size: 15px;
  }
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 14px;
`;

export const TextClick = styled.b`
  margin-top: 10px;
  cursor: pointer;
  text-decoration: underline;
  font-size: 14px;
`;

export const ErrorText= styled.p`
  font-size: 0.9rem;
  margin-top: 0px;
  color: #ff0000;
  font-weight: 400;
  text-align: center;
`;