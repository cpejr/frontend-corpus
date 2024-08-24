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

export const Label = styled.label`
  color: ${colors.background.primary};

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
  }
`;
export const StyledCalendar = styled(Calendar)`
  display: flex;
  padding: 1%;
  height: auto;
  width: 100%;
  background-color: white;
  border-radius: 50px;
`;
