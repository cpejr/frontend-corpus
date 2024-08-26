import styled from "styled-components";
import { breakpoints, colors } from "../../../styles/stylesVariables";
import { Calendar } from "primereact/calendar";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-style: normal;
  font-weight: 500;
  width: 100%;
  height: auto;
`;

export const StyledCalendar = styled(Calendar)`
  display: flex;
  justify-content: center;
  background-color: aliceblue;
  height: 30px;
  border-radius: 0.4rem;

  ::placeholder {
    font-size: 1rem;
    font-weight: bold;
    color: black;
  }
  .p-inputtext {
    background-color: white;
    border-radius: 0.4rem;
    color: black;
    border: solid 1px ${colors.font.primary};
    width: 225px;
    &:hover {
      border-color: ${colors.accent.hover};
    }
    @media (max-width: ${breakpoints.tablet}) {
      width: 100%;
    }
    @media (max-width: ${breakpoints.smallTablet}) {
      width: 225px;
    }
  }
`;
