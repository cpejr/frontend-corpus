import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;

  width: 100%;
`;

export const Label = styled.label`
  color: ${colors.background.primary};

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
  @media (max-width: 370px) {
    font-size: 1.5rem;
  }
`;

export const StyledInput = styled.input`
  height: 3rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${(props) => props?.color};
  cursor: ${(props) => props?.cursor};
  font-size: 20px;
  color: ${colors.font.secondary};
  width: 100%;
  background-color: ${colors.modals.background};
  border: ${(props) =>
    props?.error ? "0.1rem #ffd100 solid" : `0.1rem black solid`};
  outline: none;

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: 400;
    line-height: 2rem;
    height: 3rem;
  }
  @media (max-width: 370px) {
    font-size: 1.2rem;
    outline: none !important;
  }
  &:hover {
    border-color: #f19709;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: ${colors.error};
  font-weight: 400;
`;
