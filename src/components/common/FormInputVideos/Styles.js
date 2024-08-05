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

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

export const StyledInput = styled.input`
  height: 3rem;
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  color: ${(props) => props?.color};
  width: 100%;
  font-size: 20px;
  background-color: inherit;
  border: ${(props) =>
    props?.error ? "0.1rem red solid" : `0.1rem ${props.color} solid`};
  ::placeholder {
    font-weight: 400;
  }
  &:hover {
    border-color: #f19709;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    height: 3rem;
  }
`;

export const IconContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    left: 10px;
    color: ${colors.icon};
  }
`;

export const ErrorMessage = styled.p`
  font-size: 1.3rem;
  color: ${colors.error.primary};
  font-weight: 400;
`;
